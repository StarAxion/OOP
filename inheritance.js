// Inheritance

function Parent() {
    this.message = 'Hello';
}

Parent.prototype.say = function () {
    console.log(this.message);
}

function Child() {
	Parent.apply(this, arguments); // <= problem solution
    this.text = 'Bye'; 
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.go = function () {
    console.log(this.message);
}

var child = new Child();
child.go(); // => 'Hello'