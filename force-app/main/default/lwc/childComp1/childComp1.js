import { api, LightningElement } from 'lwc';

export default class ChildComp1 extends LightningElement {
    @api progressValue;
    handleChange(event)
    {
        this.progressValue=event.target.value;
        const selectedEvent=new CustomEvent("progressvaluechange",{detail:this.progressValue});
        this.dispatchEvent(selectedEvent);
    }

}