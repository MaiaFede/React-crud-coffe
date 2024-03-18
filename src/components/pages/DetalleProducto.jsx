import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleProducto = (productoInicio) => {
  return (
    <Container  className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={productoInicio.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{productoInicio.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
               {productoInicio.descripcion_amplia}
              <br/>
              <br/>
              <span className="primary-font fw-semibold ">Categoria:</span> {productoInicio.categoria}
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Precio: ${productoInicio.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
