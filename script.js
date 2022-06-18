/* console.log(typeof 'hello world');
console.log(typeof 100);
console.log(typeof false);

console.log(typeof {});
console.log(typeof []);

console.log(typeof Date());
console.log(typeof RegExp());

console.log(typeof new Number(100));
console.log(typeof new String('hello'));
console.log(typeof new Boolean(false)); */

//####################################

/* const user = {
  name: 'jorge',
  lastname: 'callejo',
  age: 30,
  hobbies: ['read', 'write', 'programing', 'run'],
  address: {
    street: 'south city',
    city: 'london',
  },
};

console.log(user); */

//###################################

/* const user1 = {
  name: 'rafael', //properties
  lastname: 'flores', //key & value
  age: 45,
  showFullName: showFullName, //methods
  showLastName: function () {
    return 'rafael flores';
  },
}; */

//###################################
//Object methods == function ||operation

/* function showFullName() {
  return 'Jorge Callejo';
}

result = user1.showFullName();
result1 = user1.showLastName();

console.log(result);
console.log(result1); */

//#################################
// this toma los valores que se encuentran dentro del objeto

/* const user2 = {
  name: 'rafael', //properties
  lastname: 'flores', //key & value
  age: 45,
  showLastName: function () {
    console.log(this);
    return this.name + ' ' + this.lastname;
  },
};
console.log(user2.showLastName()); */

//################################

/* const account = {
  number: 123456987987,
  amount: 100,
  deposit(quantity) {
    this.amount = this.amount + quantity;
  },
  withdraw(quantity) {
    this.amount = this.amount - quantity;
  },
};
account.deposit(400);
account.deposit(300);
account.deposit(800);

console.log(account);

account.withdraw(1200);

console.log(account); */

//#######################################

/* const user01 = {
  name: 'jorge',
  lastname: 'callejo',
  age: 30,
  showFullName() {
    return `${this.name} ${this.lastname}`;
  },
};
const user02 = {
  name: 'rafael',
  lastname: 'flores',
  age: 40,
  showFullName() {
    return `${this.name} ${this.lastname}`;
  },
};
const user03 = {
  name: 'camilo',
  lastname: 'sesto',
  age: 50,
  showFullName() {
    return `${this.name} ${this.lastname}`;
  },
};

//constructor
function Person() {
  (this.name = ''),
    (this.lastname = ''),
    (this.age = 0),
    (this.showFullName = function () {
      return `${this.name} ${this.lastname}`;
    });
}

const newUser = new Person();
newUser.name = 'joe';
newUser.lastname = 'McMillan';
newUser.age = 60;
console.log(newUser.showFullName()); */

//########################################################################
// constructor propio de javascript

/* const person = new Object();
console.log(person);

const person1 = {};
console.log(person1);

console.log(person1.constructor === Object);

const objeto = {
  name: 'jorge',
  lastName: 'callejo',
  age: 40,
  showName() {
    this.name;
  },
};
//methods
console.log(Object.keys(objeto));
console.log(Object.values(objeto)); */

//######################################################################

/* function Person() {
  this.name = '';
  this.lastName = '';
}
const newPerson = new Person();

console.log(newPerson); */

//####################################################################

/* function Person(name, lastname) {
  this.name = name;
  this.lastName = lastname;
  this.displayName = function () {
    return `${this.name} ${this.lastName}`;
  };
}

const jorge = new Person('jorge', 'callejo');
const rafael = new Person('rafael', 'flores');
const maria = new Person('maria', 'loca');
const jose = new Person('jose', 'loco');

Person.prototype.greet = function () {
  return `Hello i am ${this.name}`;
};

Person.prototype.age = function () {
  return Math.random() * 1000;
};

console.log(jorge.greet());
console.log(rafael.age());
console.log(maria.greet());
console.log(jose.age()); */

//####################################################################

//constructor
/* function Person1(name, lastname) {
  this.name = name;
  this.lastname = lastname;
} */

//class es un conjunto de metodos que definen un objeto
/* class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  greet() {
    return 'Hello world ' + this.name;
  }
}

const user = new Person('jorge', 'rafael');
const user1 = new Person('george', 'rafaele');

console.log(user);
console.log(user1);
console.log(user.greet());
console.log(user1.greet()); */

//TODO:

//capacidad de modelar problemas a traves de objetos
//capacidad de referir un objeto con otro objeto
//capacidad de referir un objeto perqueño de un objeto grande

//capacidad de modular y reutilización de codigo
//encapsular para que no se conozca el codigo interno
//capacidad de herencia , adquirir la capacidad de otros objetos

//capacidad de poliformismo procesar el dato y obtener otro dato

//TODO: ASSOSIATION

/* class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  greet() {
    return 'Hello world ' + this.name;
  }
}

const jorge = new Person('jorge', 'callejo');
const maria = new Person('maria', 'flores');

//relación de unir diferentes objetos 
maria.parent = jorge;

console.log(maria);
console.log(jorge); */

//TODO: AGGREGATE

/* const company = {
  name: 'fazt tech',
  employees: [],
};

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  greet() {
    return 'Hello world ' + this.name;
  }
}

const jorge = new Person('jorge', 'callejo');
const maria = new Person('maria', 'flores');

//asosiación
company.employees.push(maria);
company.employees.push(jorge);

console.log(maria);
console.log(jorge);

console.log(company); */

//TODO: COMPOSITION

/* const person = {
  name: 'jorge',
  lastName: 'callejo',
  //this object que esta aclopado y fuertemente relacionado
  address: {
    street: '123',
    city: 'San Francisco', 
    country: 'United State'
  },
} */

//TODO: ENCAPSULATION

/* const company = {
  name: 'locomotion',
  employees: [],
  sortEmployees: function () {},
}; */

/* function Company(name) {
  let employees = [];
  this.name = name;

  this.getEmployees = function () {
    return employees;
  };
  this.addEmployees = function (employee) {
    employees.push(employee);
  };
}

const company = new Company('Coca Cola');
const company1 = new Company('Pepsi Cola');

console.log(company);
console.log(company1);

company.addEmployees({ name: 'ryan' });
company.addEmployees({ name: 'rambo' });

company1.addEmployees({ name: 'jhon' });
company1.addEmployees({ name: 'root' });
company1.addEmployees({ name: 'clam' });

console.log(company.getEmployees());
console.log(company1.getEmployees());
 */

//TODO: INHERITANCE

/* function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}
function Programmer() {
  this.language = '';
}

Programmer.prototype = new Person();

console.log(Person);
console.log(Programmer);

const person = new Person('maria', 'perez');
const programmer = new Programmer();

console.log(programmer);
console.log(person);
 */

/* class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.age = null;
  }
}
class Programmer extends Person {
  constructor(language, name, lastname) {
    super(name, lastname);
    this.language = language;
  }
}

const person = new Person('jorge', 'callejo');
const programmer = new Programmer('javascript', 'rafael', 'mathos');

console.log(person);
console.log(programmer); */

//TODO: POLYMORPHISMO

//OVERLOADING

/* function countItems(x) {
  return x.toString().length;
}
console.log(countItems(100));
console.log(countItems('hello'));

function sum(x = 0, y = 0, z = 0) {
  return x + y + z;
}

console.log(sum(100));
console.log(sum(100, 200));
console.log(sum(100, 200, 300)); */

//PARAMETRIC POLYMORPHISM

/* function Stack() {
  this.items = [];

  this.push = function (item) {
    this.items.push(item);
  };
}

const stack = new Stack();
stack.push('adfkjasñ');

const stack1 = new Stack();
stack1.push(12020);

console.log(stack);
console.log(stack1); */

//SUBTYPE POLYMORPHISM

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class Programmer extends Person {
  constructor(language, name, lastname) {
    super(name, lastname);
    this.language = language;
  }
}

const jon = new Person('jose', 'carpintero');
const ryan = new Programmer('javascript', 'jorge', 'rafael');

console.log(jon);
console.log(ryan);

function writeFullName(p) {
  console.log(p.name, p.lastname);
}

writeFullName(jon);
writeFullName(ryan);
