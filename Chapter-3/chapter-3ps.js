
const obj={
    "Harry":35,
    "Rohan":56,
    "Aakash":7
    }
 
//Question 1 Answer
// => I will solve after reading array

//Question 2 Answer
for (let a in obj){
    console.log(obj[a]);
}

//question 3 ans
let correctnum=5;
let entnum;
while(entnum!=correctnum){
     entnum=parseInt( window.prompt("Enter the number"));
    console.log("Try Again")
}
console.log("Your correct number is " +correctnum);
//question 4 ans
const mean=(a,b,c,d,e)=>{
let m=(a+b+c+d+e)/5
return m;
}
let d= mean(1,2,3,4,5);
console.log(d)