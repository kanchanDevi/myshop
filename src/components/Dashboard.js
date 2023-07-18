import React, { useEffect } from "react";
import Shimmer from "./Shimmer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { add } from "../Utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Utils/productSlice";
import StatusCode from "../Utils/StatusCode";
import Alert from "react-bootstrap/Alert";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (status === StatusCode.LOADING) {
    return <Shimmer />;
  }
  if (status === StatusCode.ERROR) {
    return (
      <Alert variant="danger">Something went wrong. Please check again!</Alert>
    );
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((item) => (
    <>
      <div
        className="col-md-3 "
        style={{ marginBottom: "10px", alignItems: "center" }}
      >
        <Card key={item.id} className="h-100 p-2 ">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={item.image}
              style={{ width: "100px", height: "130px", alignItems: "center" }}
            />
          </div>

          <Card.Body className="text-center">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>INR : {item.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white", textAlign: "center" }}>
            <Button variant="primary" onClick={() => addToCart(item)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  ));

  return (
    // <div className="container p-5">

    <div className="row  m-5">{cards}</div>
    //  </div>
  );
};

export default Dashboard;
