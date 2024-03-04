import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import {useEffect, useState} from "react";
import { leerProductos } from "../../helpers/queries";

const Inicio = () => {
  const [productosInicio, setProductosInicio] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, [])

  const obtenerProductos = async () => {
    const respuesta = await leerProductos();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      setProductosInicio(datos)
    } else {
    }
  };

  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
    
          <Row>
            {productosInicio.map((productoInicio)=><CardProducto key={productoInicio.id} productoInicio={productoInicio}></CardProducto>)}
           
          </Row>
       
      </Container>
    </section>
  );
};

export default Inicio;
