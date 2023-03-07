import { LightningElement } from 'lwc';

export default class ComponentCommunicationParent extends LightningElement {
greeting;
newName;
warning;
newMessage;
    handleButtonClick1(){
this.greeting='hi sena'
    }


    handleButtonClick2(event){
this.newName=event.detail
    }

    handleButtonClick3(event){
this.warning='The result is : '+event.detail.key+ ' '+ event.detail.value
alert(this.warning)
    }

//this function is catching the event with the parameter comes from the custom event

    handleButtonClick4(event){
        // this line is putting in newMessage variable the detail comes from event
        this.newMessage ='The message is : '+event.detail.firstName+' '+ event.detail.mail
    //    this line is creating a window at the top of the page for the user to see the details
    //alert is a js function as prompt
        alert(this.newMessage)
    }

}