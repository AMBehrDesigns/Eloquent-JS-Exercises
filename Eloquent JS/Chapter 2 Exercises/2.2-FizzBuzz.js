for( let n = 1; n < 101; n++){
    let output = "";
    if (n % 3 == 0) {
        output += "Fizz"
    }
    if (n % 5 == 0) {
        output += "Buzz"
    }
    console.log(output || n);
}

/*This function should output numbers 1-100 with
 numbers divisible by 3 being replaced with Fizz; 
 numbers divisible by 5 being replaced with Buzz; 
 and numbers divisible by both being replaced with FizzBuzz. */