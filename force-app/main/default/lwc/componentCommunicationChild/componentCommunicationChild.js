import { LightningElement } from 'lwc';

export default class ComponentCommunicationChild extends LightningElement {

    handleChild1(){
        this.dispatchEvent(new CustomEvent('buttonclick'));
    }
}