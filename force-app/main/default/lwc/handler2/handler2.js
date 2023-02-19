import { LightningElement } from 'lwc';

export default class Handler2 extends LightningElement {

    name='sena'

    handleName(event){
            this.name=event.target.value
    }

country='USA'
    handleClick(event){
        this.country=event.target.value
    }

city='New York'
    handleBlur(event){
        this.city=event.target.value

    }


}