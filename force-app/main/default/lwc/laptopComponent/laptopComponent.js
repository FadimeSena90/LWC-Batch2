import { LightningElement,api } from 'lwc';

export default class LaptopComponent extends LightningElement {

   @api inch=24
//    operating System-> windows
   @api operatingSystem='windows'
   @api laptopsProcessor='intel 7'
}