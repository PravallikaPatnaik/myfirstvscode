import { LightningElement } from 'lwc';
// comment
export default class ParentPerson extends LightningElement {
    updateUser()
    {
        this.template.querySelector('c-person').updateUser();
    }
}