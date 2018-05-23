function Teacher(){
    this.name = "it is working well";
}

Teacher.prototype.sayName = function(){
    console.log(this.name);
};


function Student(){
    Teacher.call(this); // Here we have to pass the this keyword
}

Student.prototype = Object.create(Teacher.prototype);

var myStudent = new Student();

myStudent.sayName();