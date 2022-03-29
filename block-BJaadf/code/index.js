let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push('papaya');
// Remove the last element from fruits array
fruits.pop(3);
// Log the current length of fruits array
fruits.length;
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
fruits.shift(0);
console.log(friuts);
// Log the element on index 0 and 1
console.log(numbers.indexOf(0));
console.log(numbers.indexOf(1));
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.shift("Guava");
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.shift("Dragon Fruit");
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

fruits.indexOf("Dragon Fruit");
fruits.indexOf("Guava");
// Update the value of index 1 to `Pears`
fruits.index[1]="Pears";
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1, 0, 'Kiwi');
fruits.splice(2, 0, 'Lemon');
// Remove (slice) all the element from index 5
fruits.slice(0,5);
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits=['Berries', 'Melons'];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits.concat(moreFruits);
// Log the name of all fruit in console
console.log(fruits);
// Convert each fruit name to lowercase and log it
console.log(fruits.toLowerCase());
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits =fruits.toLowerCase();
console.log(lowercaseFruits);
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits =fruits.toUpperCase();
console.log(uppercaseFruits);


let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
numbers.flat(1);

console.log(numbers);
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
numbersTwo.flat(2);
// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
numbersThree.flat(Infinity);
// Use forEach to log all the elements of numberThree array

numbersThree.forEach((number)=>console.log(number));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
function double(number){
    return number * 2;
}
let doubleNumbers=numbersThree.map(double);
console.log(doubleNumbers);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
function triple(number){
    return number * 2;
}
let tripleNumbers=numbersThree.map(triple);
console.log(tripleNumbers);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
function half(number){
    return number/2;
}
let halfNumbers=numbersThree.map(half);
console.log(halfNumbers);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
function odd(number){
    return number%2!=0;
}
let oddNumbers=numbersThree.filter(odd);
console.log(oddNumbers);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
function even(number){
    return number%2==0;
}
let evenNumbers=numbersThree.filter(even);
console.log(evenNumbers);
// Find the index of 10 in numbersThree array
numbersThree.indexOf('10');
// Reverse the values of numbersThree array
numbersThree.reverse();
// Reverse the values of numbersTwo array
numbersTwo.reverse();
// Join all fruits with '-', convert to uppercase and log it
console.log(fruits.join('-'));
// Join all fruits with '&', convert to lowercase and log it
console.log(fruits.join('&'));