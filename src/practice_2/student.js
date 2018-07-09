import Person from "../../src/practice_2/person.js";

class Student extends Person{
    constructor(name,age,classNo){
        super(name,age);
        this.classNo=classNo;
    
    }

    introduce(){
       return `I am a Student. I am at Class ${this.classNo}.`;
    }
}
module.exports = Student;