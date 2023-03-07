import { LightningElement } from 'lwc';

export default class ComponentCommunicationChild2 extends LightningElement {
  name;
    handleNameChild(event){
        this.name=event.detail.value
        
    }
    handleClickName(){
        this.dispatchEvent(new CustomEvent('namecustom',{detail:this.name}))
    }


}