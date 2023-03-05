import { LightningElement} from 'lwc';
import contactRecords from '@salesforce/apex/getContactRecords.contactRecords';
export default class iterativeWayContact extends LightningElement {
filtering='';
    handleFilter(event){
        this.filtering=event.target.value
    }
cons;
error;
    handleClick(){
        contactRecords({filter:this.filtering})
        .then(result=>{this.cons=result;})
        .catch(error=>{this.error=error;});
    }



}