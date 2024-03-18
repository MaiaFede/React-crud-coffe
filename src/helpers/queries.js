const APIProductos = import.meta.env.VITE_API_PRODUCTO;
console.log(APIProductos);

//GET
export const leerProductos = async () => {
  try {
    const respuesta = await fetch(APIProductos);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
//POST

export const crearProducto = async (productoNuevo) => {
  try {
    const respuesta = await fetch(APIProductos,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(productoNuevo)
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT o PATCH
//DELETE

export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(APIProductos+'/'+id,{
      method: "DELETE"     
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//GET de un unico producto
export const obtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(APIProductos+'/'+id);
    console.log(respuesta)
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


// cunado tengamos el backend con un login enviar solicitud

const userAdmin ={
  email: "admin@rollingcoffe.com",
  password: "123Aa$123"
}
export const login = (usuario) =>{
  if (
    usuario.email === userAdmin.email &&
    usuario.password == userAdmin.password
  ){
    sessionStorage.setItem("loginRollingCoffee", JSON.stringify(usuario.email))
  return true;
  }else {
    return false
  }
};

