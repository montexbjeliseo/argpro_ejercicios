//Desestructurando un objeto

let obj : object = {a:1, b:2, c:3};

console.log(obj.c);

//Desestructurando un arreglo
let myArray = [1, 2, 3];
console.log(myArray[1]);

//Desesctructurando con estructuracion
let myArray1 = [1, 2, 3];
let [x, y, ...rest] = myArray1;
console.log(rest);

