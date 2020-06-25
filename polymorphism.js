// Polymorphism


// Определение с примером, которые нам давали на предыдущем курсе:

/* Полиморфизм – это возможность вызывать какой-то метод или свойство на разных сущностях. 
Например, как свойство length, который можно вызывать как у строки, так и у массива. 
И как метод toString(), который работает как у массивов, так и у функций, и у объектов. */


function Group() {
  this.names = [];

  this.addUser = function(name) {
    if (name instanceof Array) {
      this.names = this.names.concat(name);
    } else {
      this.names.push(name);
    }
  };

  this.getUsers = function() {
    return this.names;
  }
}

let group = new Group();

group.addUser('First');
console.log(group.getUsers());

group.addUser(['Second', 'Third']);
console.log(group.getUsers());

// Метод addUser() принимает, как строку, так и массив.




// Определение с примером, к которым я пришла после обращения к интернету с этим вопросом:

/* Полиморфизм – это использование одного и того же метода для решения внешне схожих, но технически разных задач.
При этом методы с одинаковым именем выполняют различные действия.
Например, каждый наследник может вызвать одну и ту же самую обобщенную унаследованную функцию родителя в своем собственном контексте. */


function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function(message) {
  console.log(this.name + " says: " + message);
}

function Dog() {
  Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  Animal.prototype.speak.call(this, `"woof!"`);
}

let dog = new Dog('Dog');
dog.speak();

function Cat() {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.speak = function() {
  Animal.prototype.speak.call(this, `"meow!"`);
}

let cat = new Cat('Cat');
cat.speak();