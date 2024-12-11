import { LightningElement } from 'lwc';

export default class ParentCalculator extends LightningElement {
    total=0;
    percentage=0;
     discount=0;
    markup=0;
    result=null;

    get childComponent(){
        return this.template.querySelector('c-child-calculator');
    }

    changeTotal(event){
        this.total= Number(event.target.value)
    }
    changePercentage(event){
        this.percentage= Number(event.target.value)
    }
    changeDiscount(event){
        this.discount= Number(event.target.value)
    
    }
    changeMarkup(event){
        this.markup= Number(event.target.value) 
    }

    calculatePercentage(){
       if(this.childComponent){
        this.result=this.childComponent.calculatePercantage(this.total,this.percentage);
       }
   }
   calculateDiscount(){
   if(this.childComponent){
    this.result=this.childComponent.calculateDiscount(this.total,this.discount);
   }
   }
   calculateMarkup(){
    if(this.childComponent){
     this.result=this.childComponent.calculateMarkup(this.total,this.markup);
   }

   }
}

