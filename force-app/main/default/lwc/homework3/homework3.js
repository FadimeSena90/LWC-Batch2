import { LightningElement,track } from 'lwc';

export default class Homework3 extends LightningElement {
@track
    students=[
        {
            name:'amirali',
            id:1
        },{
            name:'andri',
            id:2
        },{
            name:'eva',
            id:3
        },
    ]
count=4;
handleStdName(event){
        this.count++
      const newName=event.target.value
        const newObj={
            name:newName,
            id:this.count
        }
        this.students.push(newObj)
       
    }
   
}