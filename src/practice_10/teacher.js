import Person from "../../src/practice_10/person.js";
class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses=klasses;
    }
    introduce(){
        if(this.klasses===undefined)return super.introduce()+` I am a Teacher. I teach No Class.`
        console.log(this.klasses)
        const result=this.klasses.map(klass=>{
            return klass.number
        }).join(', ')
        //const result=numbers.join(', ')
        return super.introduce()+` I am a Teacher. I teach Class ${result}.`
    }
}
export default Teacher




