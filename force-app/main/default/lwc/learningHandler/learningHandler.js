import { LightningElement } from 'lwc';

export default class LearningHandler extends LightningElement {
    city='New York'

    handleInput(event){
        this.city=event.target.value
    }
}