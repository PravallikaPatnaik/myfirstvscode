import { LightningElement } from 'lwc';

export default class ParentPerson extends LightningElement {
    updateUser()
    {
        this.template.querySelector('c-person').updateUser();
    }
}