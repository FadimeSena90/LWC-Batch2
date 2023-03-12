import { LightningElement } from 'lwc';
export default class Homework1 extends LightningElement {
street='hello';
country='usa';
state='california';
postalCode='6789';

handleAddressStreet(event){
    this.street=event.target.value

}
handleAddressCountry(event){
    this.country=event.target.value

}
handleAddressPostalCode(event){
    this.postalCode=event.target.value

}
handleAddressState(event){
    this.state=event.target.value

}

get fullAddress(){
    return `${this.street} street, ${this.state} state, postal code: ${this.postalCode} , ${this.country.toUpperCase()}`
}

}