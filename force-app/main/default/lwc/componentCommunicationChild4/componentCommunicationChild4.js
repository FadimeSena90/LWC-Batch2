import { LightningElement } from 'lwc';

export default class ComponentCommunicationChild4 extends LightningElement {
copyUser;
userInfo={
    firstName:'',
    mail:''
}
//this two handlers are getting the data from user 
// we used detail instead of target because in custom event syntax it is used
    handleFirstName(event){
         this.userInfo.firstName=event.detail.value   
    }
    handleMail(event){
        this.userInfo.mail=event.detail.value
    }

    handleChild4(){
        // this line is creating a copy of the object and puts in copyUser 
            this.copyUser = Object.assign({}, this.userInfo);
            // This line is creating a new ccustom event named child4 
            // as parameter it is sending the copyUser object that we copied 
            this.dispatchEvent(new CustomEvent('child4',{detail:this.copyUser}))
    }

}