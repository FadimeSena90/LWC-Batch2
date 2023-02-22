import { LightningElement } from 'lwc';

export default class ForEachIterator extends LightningElement {
devices=['pc','laptop','mouse','computer','tablet']


colors=['yellow','brown','black','white']

xxx='See the message'
click=false
toggle(){
    this.click=!this.click
    if(this.click){
        this.xxx='Hide the message'
    }else{
        this.xxx= 'See the message'
    }
}





}