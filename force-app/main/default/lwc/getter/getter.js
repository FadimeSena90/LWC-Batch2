import { LightningElement } from 'lwc';

export default class Getter extends LightningElement {
language='javascript'

days=5
    handleLanguage(event){
        this.language=event.target.value

    }
    handleDays(event){
        this.days=event.target.value

    }

    // get method -  getter same thing

     get createSentence(){

        return `${this.language.toUpperCase()} lecture will be covered in ${this.days} days`
    }

// get methodName(){
//     return something
// }

}