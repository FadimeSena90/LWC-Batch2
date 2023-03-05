import { LightningElement,wire} from 'lwc';
import contactRecords from '@salesforce/apex/getContactRecords.contactRecords';
export default class WireContactsExample extends LightningElement {
filtering='';
    handleFilter(event){
        this.filtering=event.target.value
    }

    @wire(contactRecords,{filter:'$filtering'})contacts;



}