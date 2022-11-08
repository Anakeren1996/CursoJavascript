// alert('Hello World!')
// var message = 'O dia hoje está maravilhoso!'
// alert(message);

// let message = 'Que demais'
// message = 'Sim'

//STRINGS

const message = "Hello World";
console.log(message.length);
//

const firstName = "Ana";
const lastName = "Keren";
console.log("Meu nome é: " + firstName + " " + lastName);
console.log(`Meu nome é: ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);

// split
const names = "Ana,Mateus,Patricia,Sabrina";
console.log(names.split(","));

// booleanos
console.log(2 == 2); //true
console.log(2 == 3); //false

// null & undefined
const x = null;
const y = undefined;
console.log(x);
console.log(y);

// listas
const nomes = ["Ana", "Mateus", "Patricia", "Sabrina"];

const Patricia = nomes[2];
console.log(Patricia);

// push adiciona elemento no final do array
nomes.push("Alerquina");
console.log(nomes);

// unshift adiciona elemento no inicio do array
nomes.unshift(20);
console.log(nomes);

// pop remove o ultimo valor
nomes.pop();
console.log(nomes);

nomes[0] = "Anita";
console.log(nomes);

console.log(nomes.indexOf("Anita"));

//
const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function (number) {
  return number * 2;
});

console.log(numbersMultipliedByTwo);

const ages = [8, 13, 27, 30, 22, 40];
const evenAges = ages.filter(function (age) {
  return age % 2 === 0;
});

console.log(evenAges);

// O REDUCE É UTIL QUANDO A GENTE QUER REDUZIR TODO OS VALORES DE UMA LISTA PRA UM SÓ
const idades = [8, 13, 27, 30, 22, 40];
const someOfAges = ages.reduce(function (age, acumulator) {
  return acumulator + age;
}, 0);

console.log(someOfAges);

// OBJETOS
const person = {
  firstName: "Ana",
  lastName: "Lima",
  age: 25,
  hobbies: ["Ler", "séries"],
  cat: {
    age: 1,
    name: "Frajola",
  },
};

// const firstName2 = person.firstName;
// const lastName2 = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;     OU DESTRUCTURING  ABAIXO ( É A MESMA COISA )

const { firstName2, lastName2, age, hobbies } = person;

const read = person.hobbies[0];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(read);

// ADICIONANDO PROPRIEDADES A UM OBJETO
person.dog = "Gamora";
console.log(person);

// TAMBÉM POSSO ADICIONAR OBJETOS DENTRO DE OUTRO OBJETO

// UTILIZANDO LISTA COM OBJETOS
const todos = [
  {
    id: 1,
    Description: "Estudar programação",
    isComplited: false,
  },
  {
    id: 2,
    Description: "Ler",
    isComplited: true,
  },
];

const descriptionOfLastToDo = todos[1];
console.log(descriptionOfLastToDo);

// JSON
// Convertendo uma variável para json
const todosJSON = JSON.stringify(todos);
const todoList = JSON.parse(todosJSON);
console.log(todosJSON);
console.log(todoList);

// LOOPS - usado quando a gente quiser repetir um código várias vezes
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

const filmes = ["A pequena sereia", "Procurando nemo", "Cinderela"];
// Quero imprimir a lista de filmes com essas maneiras abaixo

// for (let i = 0; i < filmes.length; i++) {
//     console.log(filmes[i]);
// }

// for (let filme of filmes) {
//     console.log(filme);
// }

filmes.forEach(function (filme, index) {
  console.log(index);
  console.log(filme);
});

//    WHILE - ENQUANTO UM A CONDIÇÃO PASSADA FOR VERDADEIRA
let index = 0;
while (index < 10) {
  console.log("Index é menor do que 10!");
  // index = index + 1;
  // index + = 1;

  // MESMA COISA QUE ACIMA
  index++;
}

// FOR IN
const animals = {
  name: "Gamora",
  idade: 3,
};

for (property in animals) {
  console.log(animals[property]);
}

// CONDICIONAIS IF E ELSE
const sum = 0 + 3;
if (sum === 4) {
  console.log("Sum is equal four!");
} else if (sum === 3) {
  console.log("Sum is equal three!");
} else {
  console.log("Sum isn't equal four!");
}

// && - VERIFICA DUAS CONDIÇÕES

// || - VERIFICA SE PELO MENOS UMA DAS CONDIÇÕES É VERDADEIRA

const sum1 = 2 + 2;
const sum2 = 3 + 10;
// Não imprime nada porque uma dessas condições não é verdadeira
if (sum1 === 4 && sum2 === 6) {
  console.log("Sum 1 é igual a 4 e Sum 2 é igual 6!");
}

// Imprime o log por que pelo menos uma das condições é verdadeira
if (sum1 === 4 || sum2 === 6) {
  console.log("Sum 1 é igual a 4 e Sum 2 é igual 6!");
}

// TERNARY OPERATOR

const ana = 1 + 1;

let number = ana === 2 ? 2 : 4;
console.log(number);

// SWITCH - EXECUTA UM DETERMINADO CÓDIGO EM UMA DETERMINADA CONDIÇÃO
const car = "Ferrari";

switch (car) {
  case "Mercedes":
    console.log("Mercedes is beautiful");
    break;
  case "Ferrari":
    console.log("Ferrari is very red");
    break;
  case "Tesla":
    console.log("Tesla is expensive");
}

// VERDADEIRO OU FALSO
// !! CHECA O TRUE OU FALSE DE UMA VARIÁVEL
// ! INVERTE QUALQUER BOOLEANO
// UMA STRING VAZIA É FALSE COMO A DE BAIXO
const a = x;
console.log(!!x);

// FALSE
const b = null;
console.log(!!b);

// FALSE
const c = undefined;
console.log(!!c);

// TRUE - UMA LISTA VAZIA É SEMPRE TRUE
const list = [];
console.log(!![]);

// UM OBJETO  VAZIO TAMBÉM SEMPRE SERÁ TRUE
const objeto = {};
console.log(!!{});

// FUNÇÕES E ARROW FUNCTIONS
// AS FUNÇÕES PODEM RECEBER PARAMETROS
function shine(a, b) {
  console.log(a + b);
}
shine(2, 2);

// ARROWFUNCTIONS - UMA FORMA DIFERENTE DE ESCREVER FUNÇÕES
const sunArrow = (a, b = 10) => {
  console.log(a, b);
  return a + b;
};

const shineValue = sunArrow(2);
console.log(shineValue);

// ENTENDENDO CLASSES
class Aula {
  // RECEBE A FUNÇÃO CONSTRUCTOR
  constructor(nome, dia, professor) {
    this.nome = nome;
    this.dia = dia;
    this.professor = professor;
  }
  getFullAula() {
    console.log(`${this.nome} ${this.dia}`);
  }
}
const calendario = new Aula("História", 12, "Ana");

calendario.getFullAula();

//  MÉTODOS ESTATÍCOS - NÃO NECESSITAM QUE A CLASSE SEJA INSTANCIADA

// HERANÇAS
class Animal {
  constructor(name) {
    this.name = name;
  }

  // CRIANDO UM MÉTODO DENTRO DESS CLASSE ANIMAL
  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barked!`);
  }
}

const animal = new Animal("Simba");
const dog = new Dog("Gamora");
animal.speak();
dog.speak();

// Aula: MANIPULANDO O ELEMENTO PELO DOM

// SELECIONA APENAS UM ELEMENTO
// GETELEMENTBYID() - RETORNA UMA REFERENCIA AO ELEMENTO
// QUERYSELECTOR() - RETORN O ELEMENTO EM SI

// SELECIONAR MÚLTIPLOS ELEMENTOS
// QUERYSELECTORALL() - SELECIONA VÁRIOS ELEMENTOS
// GETELEMENTSBYCLASSNAME - NÃO CONSEGUE SELECIONAR ELEMENTOS DE LISTA
// GETELEMNETSGETBYTAGNAME()

// EVENTOS
// EXEMPLO DE EVENTO COM JAVASCRIPT
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  console.log(e);
  console.log("clicked!");
});

// VALIDANDO FORMUÇÁRIO COM JAVASCRIPT
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton1 = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");

const items = document.querySelector(".items");

submitButton1.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Please fill out the fields!";
    errorMessage.classList = "error";

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);
    return;
  }

  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue}<br />Email: ${emailValue}`;

  items.appendChild(li);

  nameInput.value = "";
  emailInput.value = "";
});
