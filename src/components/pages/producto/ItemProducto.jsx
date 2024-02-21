import { Button } from "react-bootstrap";
const ItemProducto = ({productosProps}) => {
  return (
    <tr>
       <td  {.id}></tr></td>
      <td>{productosProps.nombreProducto}</td>
      <td className="text-end">${productosProps.precio}</td>
      <td className="text-center">
        <img
          src={productosProps.imagen}
          className="img-thumbnail"
          alt="capuchino"
        ></img>
      </td>
      <td>{productosProps.categoria}</td>
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
