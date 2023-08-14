function isEven(n) {
	if (n == 0) return true;
	if (n == 1) return false;
  	if (n < 0) return isEven(-n);
	else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

/* This problem asked for me to create a function that determined whether a 
whole number was even or odd. It requested the output to be boolean. It requested
that the definition of an even number be used (n = n + 2 || n = n - 2). An alternative
that I found to be more intuitive is found within this comment below. 

function isEven(n) {
	if (n % 2 == 0) return true;
  	else if ( n % 2 != 0) return false;
	if (n < 0) return isEven(-n);
}

Both are recursive, but I find this to be more elegant! */