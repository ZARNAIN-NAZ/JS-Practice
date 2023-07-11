// ---------------------------------------CHAPTER 26-30----------------------------------------------
// Q1
// function  displayNumberDetails(){
//     var userinput = parseInt(prompt("enter a positive number"));
//     console.log("number"  +userinput)
    
//     var roundedValue = Math.round(userinput);
//     console.log( "rounded value" + roundedValue)

//     var floorValue = Math.floor(userinput);
//     console.log("floor number:" + floorValue)

// var ceilValue = Math.ceil(userinput)
// console.log("ceiling value" +ceilValue);
// }
// displayNumberDetails();
// Q2
    // function displayNumberDetails(){
    //     var userinput = parseFloat(prompt("enter number"))
    //     document.write("number" + userinput +"<br>");

    //     var roundedValue = Math.round(userinput)
    //     document.write("rounded value"  +roundedValue+"<br>")

    //     var floorValue = Math.floor(userinput);
    //     document.write("floor" +floorValue+ "<br>")

    //     var ceilValue = Math.ceil(userinput);
    //     document.write("ceil" +ceilValue+ "<br>")
    // }
    //  displayNumberDetails();

    //Q3
    // function Absolute(){
    //     var user = parseFloat(prompt("enter number"))
    //     var absvalue = Math.abs(user-3)
    //     console.log("abs value" + absvalue)

    // }
    // Absolute();

// Q4
// function rollDice() {
//     var dicevalue = Math.floor(Math.random() * 6) + 1;
//     console.log("dice value" + dicevalue)

// }
// rollDice();

//Q5
// function Coin(){
//     var userinp= parseFloat(prompt("enter number"))
//     var number =  Math.random(userinp);

//     var coin = number <0  || 1 ? "heads" : "tails";
//     document.write("coin value" + coin)    
// }
// Coin();

//Q6
// function display ( ){
//     var number = Math.floor(Math.random()*100)+1;
//     document.write("Random number"  +number)
// }
// display()

//Q7
// function weight(){
//   var user = parseFloat(prompt("eneter number"))
//     console.log("weight" +user+ "kgs")
// }
// weight()
//Q8
// function secrestnumber(){
// var num  = Math.floor(Math.random()*10)+1;
// var user  = parseInt(prompt("enter number"))
// if(user === num){
//     console.log("congratulations!")

// }else{
//     console.log("incorrect" +num)
// }
// }
// secrestnumber();

// ---------------------------------------CHAPTER 31-34----------------------------------------------
// Q1
// function currentDateTime(){
// var currentDate = new Date();
//  var dateString = "curent date and time" +currentDate;
//  document.write(dateString)
// }
// currentDateTime();

// Q2
// function month(){
//    var month  = [ "january " , "feb" , "march" ,"april","may" , " june" ,"july" ,"august" ,"september" , "october" ,"november" , "december"] 
//    var currentMonth = new Date ().getMonth();
//    var monthName = month[currentMonth];
//    alert("current month"  +monthName)
// }
// month();

// Q3
// function DayDisplay(){
// var day = ["mon" , "tues" ,"wednes" , "thurd" ,"fri" ,"sat","sun"]
// var currentDay = new Date() .getDay();
// var dayName = day[currentDay]
// alert("current day"  +dayName)
// }
// DayDisplay();

//Q4
// function Display(){
//  var day = new Date().getDay();
// if(day ===6 || day ===0){
//     console.log("its a fun today!")
// }
// }
// Display();

//Q5
// function Month(){
//     var currentDate = new Date();
//     var currentDay = currentDate.getDate();
//     if(currentDay< 16){
//         console.log("first fifteen days of month")
//     }
//     else{
//         console.log("last days of month")
//     }
// }
// Month();

//Q6
// function calculate(){
// var currentDate = new Date();
// var seconds = currentDate.getTime();
// var minutes = Math.floor(seconds/60000);
// var myVar  = minutes;
// console.log("minutes " + myVar);
// }
// calculate();

//Q7
// function time(){
//     var currentHour = new Date().getHours();
//     if(currentHour <12){
//         alert("its AM")
//     }
//     else{
//         alert("its PM")
//     }
// }
// time();

//Q8
// var date= new Date(2020 , 11,  0 )
// console.log(date)

//Q9
// var start = new Date();
// start.setFullYear(2023 , 3,3)
// start.setHours(0,0,0,0)
// var oneday  = 24*60*60**1000;
// var date2015 = new Date(2015 , 5,18)
// var dayPassed  = Math.round(start - date2015/oneday);
// alert("numebr of days passed in ramzan "  + dayPassed);

// Q10
// var currentDate = new Date ( )
// var reference = new Date (2015,0,1,0,0,0)
// var seconds  =Math.floor((currentDate -reference) / 1000);
// document.write("seocnds elapsed since begining of 2015" +seconds)

//Q11
// var current = new Date();
// var Hours = current.getHours();
// current.setHours(Hours +1);
// document.write("updated date " +current)

//Q12
// var current = new Date();
// current.setFullYear(current.getFullYear()-100)
// alert("date 100 years back" +current)

//Q13
// var age   = prompt("enter your age")
// var currentYear  = new Date ().getFullYear();
// var birth= currentYear -age
// document.write("your birth year is "+birth)

//Q14
var customer = prompt("enter name")
var month= prompt("enter month")
var units = parseFloat(prompt("enter units"))
var charges = parseFloat(prompt("enter charges"))
var LatePayment  = parseFloat(prompt("enter late payment"))
var netAmmount = (units* charges).toFixed(2)
var gross  =(parseFloat(netAmmount)+LatePayment).toFixed(2)
document.write("k electric bill")

document.write("customer name" +customer)
document.write("current month " +month)
document.write("number of units" +units.toFixed(2))
document.write("charges per units" +charges.toFixed(2));
document.write("net amount payable" +netAmmount);
document.write("late payment" +LatePayment.toFixed(2));

document.write("gross amount" +gross);


