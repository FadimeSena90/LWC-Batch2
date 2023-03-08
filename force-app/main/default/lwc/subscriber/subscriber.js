import { LightningElement ,wire} from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener} from 'c/pubsub';
export default class Subscriber extends LightningElement {
name;
@wire(CurrentPageReference)pageRef;
//connected call back is a js function to connect two different components each other
connectedCallback(){
    // register listener is the function in pubsub js 
    //it accepts 3 parameter as below
    registerListener('publish',this.showDetails,this);

}
//show details get the data and put in name , setter function
showDetails(data){
this.name=data
}

}