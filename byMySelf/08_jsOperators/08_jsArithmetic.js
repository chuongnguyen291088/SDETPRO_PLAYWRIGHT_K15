let x = 5, y = 2;

// Adding
console.log("Adding " + (x + y));

// Subtracting
console.log("Subtracting " + (x - y));

// Multiplying
console.log("Multiplying " + (x * y));

// Dividing
console.log("Dividing " + (x / y));

// Remainder
console.log("Remainder " + (x % y));

// Incrementing
{
    x++;
    console.log("Incrementing " + (x));
}

// Decrementing
{
    x--;
    console.log("Decrementing " + (x));
}

// Exponentiation
{
    console.log("Exponentiation " + Math.pow(x,2));
}

// Precedence
{
    console.log(100 + 50 * 3);
    console.log((100 + 50) * 3);
}