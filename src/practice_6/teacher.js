

import Person from "../../src/practice_2/person.js";

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
    if(this.klass!=null)
       return super.introduce()+` I am a ${Teacher.name}. I teach Class ${this.klass}.`;
    else
       return super.introduce()+` I am a ${Teacher.name}. I teach No Class.`
    }
}
module.exports = Teacher;