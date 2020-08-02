
class calculator
{
   constructor(num1,num2){
       this.num1=num1;
       this.num2=num2;
   }
   
       add(){
           console.log(this.num1+this.num2)
           } //addition
       sub(){
           console.log(this.num1-this.num2)
       } //subraction
       mul(){
           console.log(this.num1*this.num2)
       }//multiplication
       div(){
           console.log(this.num1/this.num2)
       } //division
       rem(){
           console.log(this.num1%this.num2)
       } //remainder
       
   }
   let a= new calculator(13,15);
   a.add();
   a.sub();
   a.mul();
   a.div();
   a.rem();