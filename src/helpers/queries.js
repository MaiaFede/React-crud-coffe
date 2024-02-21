const APIProductos= import.meta.env.VITE_API_PRODUCTO
console.log(APIProductos);

//GET
export const leerProductos = async () => {
    try{
        const respuesta = await fetch(APIProductos);
return respuesta
    }catch (error){
        console.log(error)
    }
}
