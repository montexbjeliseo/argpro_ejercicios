//Tipos de datos

//Any
let cantidad : any = 4;
//Array of any
let desc : any[] = [1, true, "verde"];

//String
let saludo : string = "Hola mundo!";

let nombre : string = "Mateo";

let mensaje : string = 'Hola mi nombre es ${nombre}.\nSoy nuevo en TypeScript.';
console.log(mensaje);

//number
let codigoProducto : number = 6;

//boolean 
let estadoProducto : boolean = false;

//Void : 
// El tipo void existe únicamente para indicar la ausencia de un valor,
// como por ejemplo en una función que no devuelve ningún valor.

function mensajeUsuario() : void {
    console.log(mensaje);
}

// Enum
enum Color {
    Blanco,
    Rojo,
    Verde
}

let colorAuto = Color.Blanco;

console.log(colorAuto); //return 0

//Arrays
let list : string[] = ["pimientos", "papas", "tomates"];

let rocosos : boolean[] = [true, false, false, true];

let perdidos : any[] = [9, true, "asteroides"];

//Generic
function identity<T>(arg: T): T{
    return arg;
}
//T nos permite capturar el tipo de datos por lo que el tipo utilizado 
//para el argumento es el mismo que el tipo de retorno.

//Object
let persona : object = {nombre : "Ana", edad : 45};

