import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Footer=()=>{
    return(
       <div className="mb-2">
         <Card className="text-center">
        <Card.Footer className="text-muted">@ 2023 Copyright  </Card.Footer>
      </Card>
       </div>
    )
}

export default Footer