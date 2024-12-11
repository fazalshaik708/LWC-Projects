import Company from '@salesforce/schema/Lead.Company';
import { LightningElement } from 'lwc';

export default class IterateLooping extends LightningElement {

    conList=[
        {
           id: 1,
            name:'shaik',
            Company:'Accenture'
        },
        {
            id: 2,
            name:'Fazal',
            Company:'Test'
        },
        {
            id: 3,
            name:'Muhammad',
            Company:'Google'
        }
    ]
}