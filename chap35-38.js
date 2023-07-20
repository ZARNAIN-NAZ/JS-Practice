//Q1
// function displayDate(){
//     var currentDate =  new Date();
//     var datestring = currentDate.toLocaleString();

//     document.write("current Date &7 Time" +datestring)
// }
// displayDate()

//Q2
// function greet(fname, lname){
//     var fullname  =fname+lname;
//     var greeting = "hello"+fullname
//     return greeting;
// }
// var fname="zarnain"
// var lname = "naz"
// var msg = greet(fname , lname)
// console.log(msg)

// Q3
// function displaySum(num1 , num2){
//         var num1 = prompt("enter number")
//         var num2 = prompt("enter number")

//     var sum = num1+num2
//     // return sum;
// }
// console.log(sum)
// displaySum(2);

//Q4
// function calculator(num1, num2, operate) {
//     let calculation;
//     switch(operate){
//         case "+":
//           calculation = num1 +num2;
//           break;
//           case "-":
//           calculation = num1 -num2;
//           break;
//           case "*":
//           calculation = num1 *num2;
//           break;
//           case "/":
//           calculation = num1 /num2;
//           break; 
//  default:
//     "invalid"
//     return;
//     }
//     console.log(calculation)
//     return calculation;
// }
// calculator(5,7,"-")

//Q5
// function myFunc(num1 ){
//     let r = num1**2
//  console.log(r)
// }
// myFunc(9)

//Q6
// function myFunc(val){

//     if(val ===0 || val ===1){
//         return 1;
//     }
//     else{
//         return val * myFunc(val-1)
//     }
// }
// console.log(myFunc(9))

//Q7
// function counting(start ,end){
//   if(start <=end){
//     for(let i = start; i<=end; i++){
//         console.log(i)
//     }
//   }
//   else{
//     for(let  i = start ; i>=end ; i--){
//         console.log(i)
//     }
//   }
// }
// console.log(counting(7,3))

//Q8