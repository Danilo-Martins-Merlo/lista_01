class Animal{
    constructor(animal, nome, idade) {
        
        this.animal = animal;
        this.nome = nome;
        this.idade = idade;
    
    }
    
    descrever() {
        return `Olá, eu sou um ${this.animal}, meu nome é ${this.nome} e eu tenho ${this.idade} anos`
    
    }

}

class Gato extends Animal{
    constructor(animal, nome, idade, cor) {
        super(animal, nome, idade);
        this.cor = cor;

    }

    miar() {
        console.log("Miau");
    }

}

let gato1 = new Gato('gato', 'Pietra', 8, 'branco');
let cachorro1 = new Animal('cachorro', 'Jholie', 9);

console.log(cachorro1.descrever() + "\n" + gato1.descrever() + " e tenho o pelo " + gato1.cor);
gato1.miar();