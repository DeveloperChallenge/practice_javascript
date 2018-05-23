// prototype in class

// Method-1
function MyClass(name) {
    this.name = name;
}

MyClass.prototype.sayName = function () {
    console.log(this.name); // class or constructor function's property can be access by it's prototype using this keyword
};

var testClass = new MyClass('Rakesh');

testClass.sayName();