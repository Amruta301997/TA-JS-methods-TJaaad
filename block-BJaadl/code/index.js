let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let findLongestWord=words.sort((a,b)=>a.length-b.length).pop();
// - Convert the above array "words" into an array of length of word instead of word.
words.length;
// - Create a new array that only contains word with atleast one vowel.
let vowel=words.filter((word)=>{
  if(
    word.toLowerCase().includes('a')||
    word.toLowerCase().includes('e')||
    word.toLowerCase().includes('i')||
    word.toLowerCase().includes('o')||
    word.toLowerCase().includes('u')
  ){
      return true;
  }else{
    return false;
  }
});


// - Find the index of the word "rhythm"
words.indexOf('rhythm');
// - Create a new array that contians words not starting with vowel.

let Notvowel=words.filter((word)=>{
  if(
    word.toLowerCase().includes('a')||
    word.toLowerCase().includes('e')||
    word.toLowerCase().includes('i')||
    word.toLowerCase().includes('i')||
    word.toLowerCase().includes('u')
  ){
      return false;
  }else{
    return true;
  }
});
// - Create a new array that contianse words not ending with vowel
let Startvowel=words.filter((word)=>{
  if(
    word.startsWith().includes('a')||
    word.startsWith().includes('e')||
    word.startsWith().includes('i')||
    word.startsWith().includes('o')||
    word.startsWith().includes('u')
  ){
      return false;
  }else{
    return true;
  }
});



let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray=numbers.reduce((acc,num)=>{
  return acc +num;
});
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function multiply(num){
  return num *3;
}
let multiplied3=numbers.map(multiply);
// - Create a new array that contains only even numbers
function even(num){
  return num % 2==0;
}
let evenNum=numbers.filter(even);
// - Create  a new array that contains only odd numbers.
function odd(num){
  return num % 2!==0;
}
let oddNum=numbers.filter(odd);
// - Create a new array that should have true for even number and false for odd numbers.
function evenodd(num){
  if(num % 2==0){
    return true;
  }
  else{
    return false;
  }
}
let evenoddNum=numbers.filter(evenodd);
// - Sort the above number in assending order.
numbers.sort();
// - Does sort mutate the original array?
YES
// - Find the sum of the numbers in the array.
let sumArr=numbers.reduce((acc,num)=>{
  return acc +num;
});
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength=words.sort((a,b)=>a.length-b.length).pop();