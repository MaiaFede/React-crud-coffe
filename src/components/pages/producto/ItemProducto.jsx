import { Button } from "react-bootstrap";
import { borrarProducto, leerProductos } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ItemProducto = ({productoProps, setProductos}) => {
  const eliminarProducto = ()=>{
    Swal.fire({
      title: "¿Está seguro de eliminar el producto",
      text: "No se puede revertir esta operación",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //solicitar a la api eliminar el producto
        const respuesta = await borrarProducto(productoProps.id);
        if(respuesta.status === 200){
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto ${productoProps.nombreProducto} fue eliminado correctamente`,
            icon: "success"
          });
          //actualizar la tabla del administrador
          const respuestaNuevosProductos = await leerProductos();
          if(respuestaNuevosProductos.status === 200){
            const nuevosProductos = await respuestaNuevosProductos.json()
            setProductos(nuevosProductos);
          }
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto ${productoProps.nombreProducto} no fue eliminado, intente esta operación en unos minutos`,
            icon: "error"
          });
        }
      }
    });
  }
  return (
    <tr>
       <td className="text-center">{productoProps.id}</td>
      <td>{productoProps.nombreProducto}</td>
      <td className="text-end">${productoProps.precio}</td>
      <td className="text-center">
        <img
          src={productoProps.imagen}
          className="img-thumbnail"
          alt={productoProps.nombreProducto}
        ></img>
      </td>
      <td>{productoProps.categoria}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar/'+ productoProps.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
