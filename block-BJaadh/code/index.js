// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.forEach((str)=>console.log(str));
// - Add two new words in the strings array "called" and "sentance"
strings.push('called','sentance');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.forEach((str)=>console.log(str));
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
strings.includes('is');
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf('is');
// - Check if all the numbers in numbers array are divisible by three use array method (every)
function retEvery(num){
return num / 3 == 0;
};
let returnNum=numbers.every(retEvery);
console.log(returnNum);

// -  Sort Array from smallest to largest
[...numbers].sort();
[...strings].sort();
// - Remove the last word in strings
strings.pop('sentance');
// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
function even(number){
  return number%2==0;
}
let evenNumbers=numbers.filter(even);
console.log(evenNumbers);
// - Find all the odd numbers
function odd(number){
  return number%2!=0;
}
let oddNumbers=numbers.filter(odd);
console.log(oddNumbers);
// - Place a new word at the start of the array use (unshift)
strings.unshift('The');
// - Make a subset of numbers array [18,9,7,11]
numbers.push([18,9,7,11]);
// - Make a subset of strings array ['a','collection']
strings.push(['a','collection']);
// - Replace 12 & 18 with 1221 and 1881
numbers.replace(12,1221);
numbers.replace(18,1881);
// - Replace words in strings array with the length of the word
strings.replace('word','length');
// - Find the sum of the length of words using above question
strings.length();
number.length();
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.includes('J');
// - Create new array with only first name
let firstName=[];
firstName.push(customers.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName=[];
fullName.push(customers.firstname+customers.lastname);
// - Sort the array created above alphabetically
strings.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let newArray=[];
function vowel(str){
  if(str=='a','e','i','o','u'){
    return str;
  }
}newArray=customers.filter(vowel);
console.log(newArray);


