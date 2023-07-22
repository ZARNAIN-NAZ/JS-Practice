// ===========================================Question 01==============================
// function sum(a,b){
//     let raised  = a**b
//     return raised
// }
// console.log(sum(2,3))

// ===============================================Question 02===============================
// function prac(year ){
//     return (year % 100===0)?
//     (year%400===0):
//     year%4===0;
// }
// console.log(prac(4000))

// ===============================================Question 03===============================
// let a =2;
// let b=3;
// let c= 9;
// let s = a+b+c/2;
// console.log(s)
// let area = Math.sqrt(s*((s-a)*(s-b)*(s-c)))
// console.log(area)

// ===============================================Question 04===============================
// function calculateAverage(s1,s2,s3){
//     return (s1+s2+s3)/3;
// }
// function perc(s1,s2,s3){
//     const total=s1+s2+s3;
//     const subjects = 3;
//     return(total/(subjects*100))*100;
// }
// function main(s1,s2,s3){
// const avg = calculateAverage(s1,s2,s3)
// const percentage = perc(s1,s2,s3)
// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(avg)
// console.log(percentage)

// }
// console.log(main(94,86,83))
// ===============================================Question 05===============================
// function  index(str, char){
//     for(let i=0; i<str.length;i++){
//         if(str[i]===char){
//             return i
//         }
//     }
//     return -1;
// }
// console.log(index("sbhhjh","s"))

// ===============================================Question 06===============================
// function dlt(vowels){
//     const reg = /[aeiou]/gi;
//     const res = vowels.replace(reg,"")
//     return res;
// }
// console.log(dlt("these are vowels "))

// ===============================================Question 07===============================
// function success(text){
//     const case1  = text.toLowerCase()
// let count =0;
// for(let i=0; i<case1.length -1;i++){
//     const val1 = case1[i];
//     const val2 = case1[i+1];
//     switch(val1){
//         case"a":case "e":case "i": case"o" :case "u":
//         switch(val2){
//             case"a":case "e":case "i": case"o" :case "u":
//          count++
//          break;
//          default:
//             break;
//         }
//         break;
//         default:
//            break;
//     }
// }
// return count;
// }
// console.log(success("“Pleases read this application and give me gratuity”Such occurrences are ea, ea, ui."))
// ===============================================Question 08===============================

// function meter (km){
 
//     return km*1000;
// }
//     function feet(km){
       
//         return km * 3280.84;
//     }
//     function inch(km){
       
//         return km *  39370.1;
//     } function cm(km){
       
//         return km * 10000;
//     }
//     console.log(meter(78))
//     console.log(feet(78))
//     console.log(inch(78))
//     console.log(cm(78))
// ===============================================Question 09===============================
// function calculate(h){
//     const regular = 40;
//     const rate = 12.00;
//     let over =0;
//     if(h>regular){
//         const overHours = h-regular;
//         over = overHours*rate

//     }
//     return over;
// }
// console.log(calculate(49))

// ===============================================Question 10===============================
// function currency(amount){
//     const h1 =100;
//     const t1 = 50;
//     const u1 = 10;
//     let note100=Math.floor(amount);
//     let rem = (amount - note100) *100;
//     let note50  =Math.floor(rem/t1);
//     rem %= t1;
//     let note10 = Math.floor(rem/u1)
//     return {
//         note100,
//         note50,
//         note10,
//     }
// }
// console.log(currency(8))














