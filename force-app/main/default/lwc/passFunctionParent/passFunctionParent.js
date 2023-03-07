import { LightningElement } from 'lwc';

export default class PassFunctionParent extends LightningElement {

    handleBrand(event){
       this.computer='ASUS'
        this.template.querySelector('c-pass-function-child').brandComputer(this.computer)

    
    }
}