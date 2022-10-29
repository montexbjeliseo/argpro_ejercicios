class Operacion {
    private valor1 : number;
    private valor2 : number;
    private resultado : number;

    constructor(){
        this.valor1 = 0;
        this.valor2 = 0;
        this.resultado = 0;
    }

    get Valor1() : number {
        return this.valor1;
    }

    set Valor1(valor : number){
        this.valor1 = valor;
    }

    get Valor2() : number {
        return this.valor2;
    }

    set Valor2(valor : number){
        this.valor2 = valor;
    }

    get Resultado() : number {
        return this.resultado;
    }

    set Resultado(valor : number) {
        this.Resultado = valor;
    }
}

class Suma extends Operacion {
    Sumar() {
        this.Resultado = this.Valor1 + this.Valor2;
    }
}

class Resta extends Operacion {
    Restar() {
        this.Resultado = this.Valor1 - this.Valor2;
    }
}

let operacion1 = new Suma();
operacion1.Valor1 = 45;
operacion1.Valor2 = 10;
operacion1.Sumar();
console.log(operacion1.Resultado);

let operacion2 = new Resta();
operacion2.Valor1 = 45;
operacion2.Valor2 = 10;
operacion2.Restar();
console.log(operacion2.Resultado);