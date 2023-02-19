import { LightningElement } from 'lwc';

export default class GetterRetirement extends LightningElement {
    age=89
    retirementAge=65
    handleAge(event){
        this.age=event.target.value
    }
get findRetirementAge(){
    if(this.age<0){
        return `Age can not be less than 0`
    }else if(this.age>150){
        return `Most probably you are dead`
    }else if(this.age>=65){
        return`You can be retired`
    }
    else{
        return `${this.retirementAge-this.age} years more you have to work`
    }

}



}