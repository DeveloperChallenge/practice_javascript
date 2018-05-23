function Teacher(name, salary){
    this.TeacherName = name;
    this.salary = salary;
}

Teacher.prototype.add = function(){
    console.log();
};


function Student(name, section){
    Teacher.call(this,"Drivio",'35000');
    this.studentName = name;
    this.section  = section;
}

Student.prototype = Object.create(Teacher.prototype);
Student.prototype.viewStudent = function(){
    console.log(this.studentName);
};

var myStudent = new Student('Mahesh','Bsc.');

myStudent.viewStudent();
console.log(myStudent.TeacherName);