// prototype in class

// Method-1
function MyClass(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    }
}


var testClass = new MyClass('Rakesh');

testClass.sayName();