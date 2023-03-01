import { LightningElement } from 'lwc';

export default class SlotParentExample extends LightningElement {

    typeSong='pop'
    singer='ed sheeran'
    handleChange(event){
        this.typeSong=event.target.value
    }
    handleSinger(event){
        this.singer=event.target.value
    }
}