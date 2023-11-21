// create an array with three names
//const arr =['Jordan', 'Cameron', 'Eliot'];
//print the array
//console.log(arr);

//print each individual vairiable in the array 
//console.log(arr[0]);

//rename a vairiable in the array
//arr[0] = 'Jordan Harrison';
//console.log(arr);

//arr[3] = 'Andre McCall';
//console.log(arr);



const arr = ['Sailesh', 'Kami', 'Aaliyah', 'Orion']
console.log(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

arr[4] = 'Cassie';

console.log(arr);

// show me length of array
console.log(arr.length);

// adds Treesa to the end of the array 
arr[arr.length]= "Ayah"
console.log(arr);

// adds Treesa to the end
arr.push("Ayah")
console.log(arr);
console.log(arr.length);

//remove last element in a array
arr.pop()
console.log(arr);
console.log(arr.length);

//removes first element in a array
arr.shift()
console.log(arr);
console.log(arr.length);

//adds to start of the array
arr.unshift("Sailesh")
console.log(arr);
console.log(arr.length);

// At element location 1, remove 1 element in the array
arr.splice(1,1);
console.log(arr);
console.log(arr.length);

// At element location 1, add "" at position
arr.splice(1, 0, "Kami");
console.log(arr);
console.log(arr.length);

