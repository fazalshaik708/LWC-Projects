import Company from '@salesforce/schema/Lead.Company';
import id from '@salesforce/user/Id';
import { LightningElement ,track} from 'lwc';

export default class HelloWorld extends LightningElement {
  isAvailable=false;
    name;
    fullName="Shaik Fazal"
    title='Salesforce Developer'



changeHandler(event){
    this.title=event.target.value
}
changeName(event){
    this.fullName=event.target.value

}

      @ track address={
        street:' test',
        city:'New York',
        state:'New York',
        zip:'10001'
      }

      changeStreet(event){
        this.address.street=event.target.value  

}
    users=["shaik",'Fazal']

      get firstName(){
        return this.users[0].toUpperCase()
      }

      num1=770;
      num2=80;

      get sumNumbers(){
        return this.num1*this.num2
      }


      shaowData(){
          this.isAvailable=true
      }

      changeMethod(event){
        this.name= event.target.value
      }

      get showData(){
        return this.name ==="hello"
      }

      carList=['Toyota','Honda','Suzuki','Lexus','BMW','Audi'];

     

         
     }

     