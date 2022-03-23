import { LightningElement, track } from 'lwc';

export default class ParentCom1 extends LightningElement {
    @track progressValue=0;
    handleProgressValueChange(event)
    {
        this.progressValue=event.detail;
    }

}