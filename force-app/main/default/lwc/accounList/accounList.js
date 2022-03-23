import { LightningElement, track, wire } from 'lwc';

import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class AccounList extends LightningElement {
    @track accounts;
    @track error;
    handleLoad(){
        getAccountList()
            .then(result=>{
                this.accounts=result;
            })
            .catch(error=>{
                this.erro=error;
            });
        }

    }




    


    /*
    @track accounts;
    @track error;
    @wire (getAccountList)
    wireAccounts({error,data}){
        if(data)
        {
            this.accounts=data;
        }else if(error)
        {
            this.error=error;
        }
    }*/

    //@wire (getAccountList) accounts;


