class SomadorDeNotas{
    constructor(){
        this.total = 0;
    }

    adicionarNota(nota){
        this.total += nota;
    }

    verTotal(){
        console.log(`Soma total das notas: ${this.total}`);
    }
}

let somador = new SomadorDeNotas();

somador.adicionarNota(10);
somador.adicionarNota(5);
somador.adicionarNota(15);

somador.verTotal();