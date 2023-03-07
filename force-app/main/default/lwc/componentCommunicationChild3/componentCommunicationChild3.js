import { LightningElement } from 'lwc';

export default class ComponentCommunicationChild3 extends LightningElement {

    handleChild3(){
        const event = new CustomEvent('child3', {
            detail: { 
                key:'6543456789ihubvyguh',
                value:'Child to parent example 3'
            }
        });
        this.dispatchEvent(event);
    }
}