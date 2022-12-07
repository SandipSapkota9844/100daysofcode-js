//Conditionals expressions in javascripts;

// let age = parseInt(prompt("Hey What's your age?"));
// if (age < 18)
//  {
//   console.log("You are not allowed for voting for being minor");
// }
// else if(age>100)
// {
// console.log("You are not allowed to vote as you are over aged ");
// }
// else{
// console.log("You are allowed to vote");
// };

// ternarary operator
// console.log (age>18?"You can Drive":"You cannot drive");

//HomeWork - Switch Case;

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  case 2:
    text = "Today is Monday";
    break;
  case 3:
    text = "Todau Is Tuesday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

console.log(text);
