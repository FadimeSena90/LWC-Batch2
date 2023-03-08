import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class Navigation extends NavigationMixin(LightningElement) {

    handleWebPage(){
this[NavigationMixin.Navigate]({
    type: 'standard__webPage',
    attributes: {
       url: "https://developer.salesforce.com/docs/component-library/bundle/lightning-navigation/documentation"
    }
});

    }

    handleAccPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "list",
                objectApiName: "Account"
                
            }
        });
    }

    handleAccRecords(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: "edit",
                recordId: "001Dn00000K0rXBIAZ",
                objectApiName: "Account"
            }
        });
    }

}