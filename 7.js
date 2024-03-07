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

let gato1 = new Animal('gato', 'Pietra', 8);
let cachorro1 = new Animal('cachorro', 'Jholie', 9);

console.log(gato1.descrever() + "\n" + cachorro1.descrever());