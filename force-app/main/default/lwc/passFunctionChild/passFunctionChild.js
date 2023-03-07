import { LightningElement ,api} from 'lwc';

export default class PassFunctionChild extends LightningElement {
@api computer;
    @api brandComputer(brand){
        this.computer=brand;
        alert(brand)
    }

}