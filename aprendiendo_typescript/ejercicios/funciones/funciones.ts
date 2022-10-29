//Funciones: sintaxis
function nombre(param1 : T, param2 : T) : T{
    /* Instrucciones: TO DO */
    return param1;
}

function calcularIva(productos : Producto[]) : [number, number]{
    let total = 0;
    productos.forEach(({precio})=>{
        total += precio;
    });
    return [total, total * 0.15];
}

//class
class Producto {
    precio: number;
}