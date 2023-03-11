const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Addition(a, b)
{
	let Sum = a + b
	return(Sum)
}

function Subtraction(a, b)
{
	let Difference = a - b
	return(Difference)
}

function Multiplication(a, b)
{
	let Product = a*b
	return(Product)
}

function Division(a, b)
{
	let quotient = a/b
	return quotient
}

function SquareRoot(a)
{
	let result = Math.sqrt(a)
	return result
}
function OperatorCheck(operator, operand1, operand2)
{
if (operator == `+`)
{
	console.log(Addition(operand1, operand2))
}
else if(operator ==`-`)
{
console.log(Subtraction(operand1, operand2))
}

else if(operator == `*`)
{
	console.log(Multiplication(operand1, operand2))
}

else if (operator == `/`)
{
	console.log(Division(operand1, operand2))
}
}

reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
OperatorCheck(mathSymbol, num1, num2)






	// This line closes the connection to the command line interface.
	reader.close()

});
