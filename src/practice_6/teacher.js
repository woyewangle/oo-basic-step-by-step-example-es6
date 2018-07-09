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
        const klassString=(this.klass===undefined)?"No Class":`Class ${this.klass}`
       return `${this.basicIntroduce()} I teach ${klassString}.`;
       
    }
}
module.exports = Teacher;