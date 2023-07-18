import Card from 'react-bootstrap/Card';


const Shimmer = () => {
    return (
      <div className="d-flex justify-content-center align-items-center flex-wrap mt-5">
        {Array(20)
        .fill("")
        .map((e, index) => (
            <div key={index} className=" col-md-4 m-2 align-items-center" style={{marginBottom:'10px', alignItems:"center", width:'350px'}}>
    <Card  style={{backgroundColor:'#ededed', height:'250px', overflow:'hidden', boxShadow:'0px 4px 6px rgba(0, 0, 0, .12)',background: 'linear-gradient(to right, #f0f0f0 0%, #f8f8f8 20%, #f0f0f0 40%, #f8f8f8 60%, #f0f0f0 80%, #f8f8f8 100%)', animation: '1s loading ease-in-out infinite', }} > 

      </Card>
     </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;