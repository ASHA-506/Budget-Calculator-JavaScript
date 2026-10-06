function calculate(){

var income  = Number(document.getElementById("income").value)
var grocery = Number( document.getElementById("grocery").value)
var transp  = Number(document.getElementById("transp").value)
var entert  = Number(document.getElementById("entert").value)
var expense = Number(document.getElementById("expense").value)
var rent    = Number(document.getElementById("rent").value)

    if(document.getElementById("income").value !==""){
        let totalExpense = grocery+transp+entert+expense+rent
        let moneySaved = income - totalExpense 
        if(moneySaved>=0){
            document.getElementById("saved").value=moneySaved;
            document.getElementById("spent").value="";


        }else{
        document.getElementById("spent").value=Math.abs(moneySaved);
        document.getElementById("saved").value="";

        }
        

    }else{
        alert("Please give the income ..!")
    }
}


function logout(){
    window.location.href = "index.html#login-form"
}

const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

// show in specific format
let monthDateYear = (month+1) + '/' + date + '/' + year;
var date1 = new Date();
var time = date1.toLocaleTimeString();

document.getElementById("date").value=`${monthDateYear}  ${time}`;


console.log(monthDateYear); // 7/3/2020
console.log('time:',time);