import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FoodItem = ({ id, category, description, image, price, title}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
       <div className="text-center">
        <Card.Img
          variant="top"
          src={image}
          style={{ width: "100px", height: "130px" }}
        />
      </div>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>INR : {price}</Card.Text>
        <Button variant="primary" >Add to Cart</Button>
      </Card.Body>
    </div>
  );
};

export default FoodItem;