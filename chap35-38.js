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
// function outer(base , perp){
// function inner(num){
//     return num*num;
// }
// const bsquare = inner(base);
// const perpendicularSquare = inner(perp);
// const hSquare  =bsquare  + perpendicularSquare ;
// const Hyp  = Math.sqrt(hSquare);
// return Hyp
// }
// console.log(outer(3,4))

//Q9
// functio[n areaOfReactangle(width , height){
// let a = width * height;
// return a ;
// }
// console.log(areaOfReactangle(8,9));

//Q 11
// function myFunc(str){
//     let convert = str.toUpperCase()
// return convert;
// }
// console.log(myFunc("hello i am zarnain"))

//Q12
// function myFunc(str){
//     var arr1 =str.match(/\w[a-z]{0,}/gi);
//     var result = arr1[0];
//     for(let i  = 1; i<arr1.length ; i++){
//         if(result.length < arr1[i].length){
//             result = arr1[i]
//         }
//     }
//     return result ;
// }
// console.log(myFunc("web development is a good"))

//Q13
// function myFunc(str , letter){
// let letterValue = 0;
// for(let i=0; i<str.length;i++){
//     if(str.charAt(i) ===letter)
// {
//     letterValue =letterValue+1
// }}
// return letterValue;
// }
// console.log(myFunc("freecodecamp.com" , 'z'));

//Q14
function calcCircumference(radius){
let res = (Math.pi *radius)*2
console.log( "The circumference is "+res+".")
}
function calcArea(radius){
    let max = (Math.pi*radius)*radius;
    console.log("the area is"+max)
}
calcCircumference(9);
calcArea(89)







