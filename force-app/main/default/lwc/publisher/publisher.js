import { LightningElement ,wire} from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {fireEvent} from 'c/pubsub';
export default class Publisher extends LightningElement {
// Import  current page reference from lightning navigation 
//it is related with salesforce so we have to use wire decorator 
//wire is used to get the data from salesforce or apex
    @wire(CurrentPageReference)pageRef;
    // name;
    //the below function is going to run in publisher html input 
    //it is going to send the input that user entered
    handlePublishingName(event){
        //fire event is the function that is already craeted in pubsub library
        //pubsub library is ready code in google just get and use it
        //it accepts 3 parameter as below
        fireEvent(this.pageRef,'publish',event.target.value);
    }
}