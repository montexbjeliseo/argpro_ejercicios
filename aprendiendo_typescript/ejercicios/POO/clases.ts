//CLASES EN TYPESCRIPT
class Persona {
    //Atributos
    private nombre : string;
    private apellido : string;
    private anioNac : number;
    constructor(nombre : string, apellido : string, anio : number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNac = anio;
    }

    //Getters and setters
    get Nombre() : string {
        return this.nombre;
    }

    set Nombre(nombre : string){
        this.nombre = nombre;
    }
    get Apellido() : string {
        return this.apellido;
    }

    set Apellido(apellido : string){
        this.apellido = apellido;
    }
    get Edad() : number {
        return this.anioNac;
    }

    set Edad(edad : number){
        this.anioNac = edad;
    }

    //Métodos
    public toString() : string {
        return this.nombre + " " + this.apellido;
    }
    public edad(anio : number) : number{
        return this.anioNac - anio;
    }
}

//Instanciacion
let persona1 : Persona = new Persona("Juan", "López", 1990);
let persona2 : Persona = new Persona("Mateo", "Miranda", 1997);
let persona3 : Persona = new Persona("Ibrahim", "Cortez", 1980);

persona1.Nombre = "María";
persona1.Apellido = "Rosas";