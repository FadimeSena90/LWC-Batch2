import { LightningElement,wire } from 'lwc';
import allAccounts from '@salesforce/apex/AccountRecords.allAccounts'; 
export default class WireDecorator extends LightningElement {

@wire(allAccounts)accs;


}