import { LightningElement ,wire} from 'lwc';
import createLead from '@salesforce/apex/leadRecords.createLead';
export default class Homework2 extends LightningElement {
    @wire(createLead)leads;
}





    // lastName;
    // company;
    // status;
    // handleLastName(event){
    //     this.lastName=event.target.value
    // }
    // handleComp(event){
    //     this.company=event.target.value
    // }
    // handleStatus(event){
    //     this.status=event.target.value
    // }

    



