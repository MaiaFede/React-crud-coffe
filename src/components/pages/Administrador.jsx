import { Button, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useEffect, useState } from "react";
import { leerProductos } from "../../helpers/queries";
import {Link} from "react-router-dom"


const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, [])

  const obtenerProductos = async () => {
    const respuesta = await leerProductos();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      setProductos(datos)
    } else {
    }
  };

  return (
   
      <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
        </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto)=> <ItemProducto key={producto.id} productoProps={producto}></ItemProducto>)}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
