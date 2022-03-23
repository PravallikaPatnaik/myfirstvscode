import { api,LightningElement, track} from 'lwc';
import accountName from '@salesforce/schema/Account.Name';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class LdsDemo extends LightningElement
 {
     @api recordId;
     @api objectApiName;

     @track fields=[accountName, AnnualRevenue];

     connectedCallback()
     { 
         this.objectApiName=this.objectApiName;
     }

     OnhandleLoad()
     { 
         const evnt=new ShowToastEvent({ 
             title:"Loaded",
             message:"Data loaded",
             variant:"Info",
             mode:"dismissable"
         })
this.dispatchEvent(evnt);
     }

     OnhandleSuccess()
     { 
         const evnt=new ShowToastEvent({ 
             title:"Success",
             message:"Data saved successfully",
             variant:"success",
             mode:"dismissable"
         })
         this.dispatchEvent(evnt);
     }

     OnhandleError()
     { 
         const evnt=new ShowToastEvent({ 
             title:"Error!!",
             message:"Error Occured",
             variant:"error",
             mode:"dismissable"
         })
         this.dispatchEvent(evnt);
     }

}