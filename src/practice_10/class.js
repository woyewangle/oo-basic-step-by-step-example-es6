export default class Class{
    constructor(number){
        this.number=number;
    }
    getDisplayName(){
        return `Class ${this.number}`
    }
    assignLeader(student){
        if(this.number===student.klass.number){
            student.isLeader=true;
            this.leader=student;
            return this.leader
        }else{
            console.log('It is not one of us.') 
            return this.leader=''
        }
    }

    appendMember(student){
        if(this.number!==student.klass.number){
            student.klass=this          
            student.klass.number=this.number
        }
    }
}


