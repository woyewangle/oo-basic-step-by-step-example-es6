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
            console.log('It is not one of us.') //测试用例要求不是本班学生，无法任命并输出字符串
            return this.leader=''
        }
    }

    appendMember(student){
        if(this.number!==student.klass.number){
            student.klass=this          //把非本班学生添加到本班，并将学生的klass属性设为本班对象
            student.klass.number=this.number
        }
    }
}

