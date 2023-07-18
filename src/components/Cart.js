import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {remove} from './../Utils/cartSlice'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);

  const dispatch=useDispatch()

  const removeToCart=(id)=>{
    dispatch(remove(id))

  }

  const cards=cartItems.map((item)=>(

     <div className="col-md-12" style={{marginBottom:'10px'}}>
      <Card key={item.id} className="h-100">
      <div className="text-center">
          <Card.Img
            variant="top"
            src={item.image}
            style={{ width: "100px", height: "130px" }}
          />
     </div>
        <Card.Body className="text-center">
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>INR : {item.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{background:'white', textAlign:"center"}}>
        <Button variant="danger" onClick={()=>removeToCart(item.id)} >Remove To Cart</Button>

        </Card.Footer>
        </Card>
        </div>
  
  ))

  return (
    <div className="row">
          {cards}
     </div>

  );
};

export default Cart;
