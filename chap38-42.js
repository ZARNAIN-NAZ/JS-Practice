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
function dlt(vowels){
    const sen= vowels.delete(vowels)
    return sen 
}
console.log("acha to hum chlte hai")

