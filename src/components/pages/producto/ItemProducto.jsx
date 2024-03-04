import { Button } from "react-bootstrap";
const ItemProducto = ({productoProps}) => {
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
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
