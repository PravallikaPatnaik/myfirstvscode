import {api, LightningElement, track} from 'lwc';

export default class Person extends LightningElement {
    //@track whenever we want to property of data member reactive
    //@api whenever we want to make a data member public
    @api location;
    @track 
    user = {
            firstName:"Pravallika",
            lastName:"Patnaik"
    };

    @api
     updateUser()
     {
         /*
         this.user = {
             firstName:"Shanthi",
             lastName:"kadali"
            }*/
            this.user.firstName="pathro";
     }
}