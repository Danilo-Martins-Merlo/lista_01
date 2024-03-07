// Definição da classe Funcionário
class Funcionario{
    
    // Constructor da classe Funcionário
    constructor(nome, idade, salarioB){
        this.nome = nome;
        this.idade = idade;
        this.salarioB = salarioB;
    }

    // Método para calcular o salário total do funcionário
    calcularSalario(){
        // Ele retorna 0 pois cada funcionário terá um calculo diferente em cima desse método.
        return 0;
    }
}

// Define a classe Professor, que herda de Funcionário
class Professor extends Funcionario{
    // Constructor da classe Professor
    constructor(nome, idade, salarioB, disciplina, horasAula, valorHora){
        //Herda da classe Pai (Funcionário) os atributos nome, idade, e salário base.
        super(nome, idade, salarioB);

        // Cria os atributos disciplina, horasAula e valorHora para cara Professor
        this.disciplina = disciplina;
        this.horasAula = horasAula
        this.valorHora = valorHora
    }

    // Multiplica as horasAula pelo valorHora para obter o salário do professor
    calcularSalario(){
        return this.horasAula * this.valorHora;
    }
}

// Professor de Matemática com 20 horas de aula por semana
const professor1 = new Professor('Heitor', 35, 3000, 'Matemática', 25, 50); 

// Professor de História com 15 horas de aula por semana
const professor2 = new Professor('Danilo', 40, 3500, 'Programação', 25, 100);

// Chama o método calcularSalario para cada professor e mostra o salário calculado no console
console.log(`${professor1.nome}, professor de ${professor1.disciplina}, tem o salário de R$ ${professor1.calcularSalario()}`);
console.log(`${professor2.nome}, professor de ${professor2.disciplina}, tem o salário de R$ ${professor2.calcularSalario()}`);