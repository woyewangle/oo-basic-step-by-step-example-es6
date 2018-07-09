import Person from "../../src/practice_2/person.js";
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    
    }

    basicIntroduce(){
        return   `${super.introduce()} I am a ${Student.name}. I am at Class ${this.klass}.`;
        
     }


    introduce(){
        return `${this.basicIntroduce()}`;
    }
}

module.exports = Student;