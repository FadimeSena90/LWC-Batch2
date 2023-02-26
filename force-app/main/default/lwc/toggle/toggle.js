import { LightningElement } from 'lwc';

export default class Toggle extends LightningElement {

    bicycle=[
        {
        type:'kid',
        id:1
        },
        {
        type:'mountain',
        id:2
        },
        {
        type:'cruisers',
        id:3
        },
        {
        type:'electric',
        id:4
        },
        {
        type:'road',
        id:5
        }
        ]



        places=[
        {
        id:1,
        place:'streetX'
        },
        {
        id:2,
        place:'streetY'
        },
        {
        id:3,
        place:'streetZ'
        },
        {
        id:4,
        place:'streetN'
        }
    ]   
    

showOrHide='Show Places'
    clicked=false
    handleClick(){
        this.clicked=!this.clicked
        if(this.clicked){
this.showOrHide='Hide places'

        }else{
            this.showOrHide='Show places'
        }
    }

}