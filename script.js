////Define Function 

/*function sayHello(userName=`User`){
    console.log("Hello "+userName+" !");
}

function max(number1, number2){
    if(number1>number2){
        console.log(number1);
    }
    else{
        console.log(number2);
    }
}

max(5,9);
max(22,10);*/

let x=Number (prompt("Enter number 1:"));
let y=Number (prompt("Enter number 2"));

function sum(number1,number2){
    document.write(`<p>${number1} + ${number2} = ${number1 +number2}</p>`)
}

function sub(number1,number2){
    document.write(`<p>${number1} - ${number2} = ${number1 -number2}</p>`)
}

function mult(number1,number2){
    document.write(`<p>${number1} * ${number2} = ${number1 *number2}</p>`)
}

function div(number1,number2){
    document.write(`<p>${number1} / ${number2} = ${number1 /number2}</p>`)
}

sum(x,y)
sub(x,y)
mult(x,y)
div(x,y)