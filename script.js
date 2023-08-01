const countValue= document.querySelector('#count');//const is the element and value is the value kept inside it
                                                   //#counter is for selecting counter id or we can use get.Element.By.id('without just id name)
const increment=()=>{
    //get the value from UI
     let value=parseInt(countValue.innerText);  //value is let because we change it and const never change 
     //update the value from UI
     value=value+1;
     //set the value to UI
     countValue.innerText=value;
}
const decrement=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //update the value from UI
    value=value-1;
    //set the value to UI
    countValue.innerText=value;
}
//we can also write--- but it is without arrow function
// funnction increment(){
//      //get the value from UI
//      let value=parseInt(countValue.innerText);  //value is let because we change it and const never change 
//      //update the value from UI
//      value=value+1;
//      //set the value to UI
//      countValue.innerText=value;
// }
