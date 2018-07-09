import Person from "../../src/practice_2/person.js";
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    basicIntroduce(){
       return   `${super.introduce()} I am a Teacher.`;
       
    }

   
    introduce(){
        const klassString=(this.klass===undefined)?"No Class":`Class ${this.klass.number}`
       return `${this.basicIntroduce()} I teach ${klassString}.`;
       
    }

    introduceWith(student){
        if(this.klass.number===student.klass.number)return `${this.basicIntroduce()} I teach ${student.name}.`
        return  `${this.basicIntroduce()} I don't teach ${student.name}.`
    }
    
}
module.exports = Teacher;
