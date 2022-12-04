// Question 1 : Create a variable of type string and try to add number to it.

console.log("-------------------------------Question-1 Answer-------------------------");

let s = "Helllllo";
let w = s + 3;
console.log(w);


// Question 2 : Use types of operator in the above question to find the data type.
console.log("------------------------------------Question-2 Answer-----------------------");
console.log("Hi The requested data type is " + typeof w + "."); // This is called string concating Basically in the javascript you can concate two string as one .






// Question 3 : Create a object in js And Can you change it to hold a number later.
console.log("------------------------------Question-3 Answer---------------------------");
const Details = {
  name: "Sandip",
  age: 19,
  status: "Unemployed",
};
//No we cannot add it to hold a number later cause it has been already declared!
console.log(Details);





// Question 4 : Try to add the new key to the problem 3 and were you able to do it?
console.log("----------------------------Question-4 Answer-----------------------------");
Details['isStillalive'] = true;
console.log(Details)




// Question 5 : Write a js program to create  word meaning dictionary of 5 words;
console.log("----------------------------------Question-5 Answer----------------------------");

const dictionary={
    hey:"used as an exclamation to call attention or to express pleasure, surprise, bewilderment",
    nepal:"a constitutional monarchy in the Himalayas between N India and Tibet",
    decalcomania :"the art or process of transferring pictures or designs from specially prepared paper to wood, metal, glass",
    netsuke:"a small figure of ivory, wood, metal, or ceramic, originally used as a buttonlike fixture on a man's sash, from which small personal belongings were hung.",
    Ganymede:"the largest moon of the planet Jupiter."
}

console.log(dictionary)


