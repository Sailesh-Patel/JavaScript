console.log(1);
console.log(2);
console.log(3);
if (false) {
    console.log(4);
}
console.log(4);
console.log(5);
console.log(6);

let num = 12;

// check this condition
if (typeof num !== 'number') {
    //run if num is NOT a number
    if (num === undefined) {
        console.log("MissingNo#");
    }
    console.log("gimme a number, you muppet!");
    //if the first was false - checks this condition
}
//divide by 2 and find the remainder 
else if(num % 2 === 0) {
    //runs if even
    console.log("Even");
    //runs is previous ifs are ALL false
} else {
    console.log("Odd");
}


num = 8;

if(num > 10 && num % 2 ==0){
    console.log("Num is greater than 10 and even");
} else if (num > 10 || num % 2 == 0){
    console.log("Num is greater than ten or even");
    console.log("Num is neither even or greahter than ten");
}

age = 15;

if (age <= 17) {
    console.log("Underage");
    } else {
        console.log("18 or over");
    }

    age = 25;

    if (age <= 17) {
        console.log("Underage");
        } else {
            console.log("18 or over");
        }

if (age <= 17) {
    console.log("Underage");
    } else if (age >=18 && age <=65) {
    console.log("Insurable");
    } else {
    console.log("out of range");
    }





    FizzBuzz = 15


    if (FizzBuzz % 5 === 0 && FizzBuzz % 3 === 0 ) {
        console.log("Fizz Buzz");
    }
    else if  (FizzBuzz % 3 === 0) {
        console.log("Fizz");
        } 
    else if (FizzBuzz % 5 === 0) {
        console.log("Buzz");
        } 
        else {
            console.log("out of range");
            }



