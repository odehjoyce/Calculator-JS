
//A simple calculator without Frontend using switch case.

const a = parseFloat(prompt("Enter the First Number: "));
const b = parseFloat(prompt("Enter the Second Number: "));
const op = prompt("Enter the operator: ");
let result;

switch(op){
 case "+":
    result = a + b;
    console.log(`${a} + ${b} = ${result}`);
  break;
 
 case "-":
    result = a - b;
    console.log(`${a} - ${b} = ${result}`);
    break;

 case "*":
    result = a * b;
    console.log(`${a} * ${b} = ${result}`);
    break;

 case "/":
    result = a / b;
    console.log(`${a} / ${b} = ${result}`);
    break;

 default:
  console.log("Wrong Operator");
}