import Person from "../../src/practice_8/person.js";
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
        this.isLeader=false;
    }
    introduce(){
        //取不到klass此法不通
        //if(klass.leader===student)return super.introduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`
        if(this.isLeader===true)return super.introduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`
        return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`
    }
}
export default Student



