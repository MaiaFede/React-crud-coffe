import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardProducto = ({productoInicio}) => {
 
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img src={productoInicio.imagen} alt={productoInicio.nombre} className="card-img-top-nueva" />
        </div>
        <Card.Body>
        <Card.Title className="primary-font">{productoInicio.nombre}</Card.Title>
        <Card.Text>
          Descripción: {productoInicio.descripcion_breve} <br className="mb-2"/> 
          <span className="fw-bold">Precio: {productoInicio.precio}</span></Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
        <Button className='btn btn-success me-2' as={Link} to="./DetalleProducto" >Ver más</Button>
      </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
