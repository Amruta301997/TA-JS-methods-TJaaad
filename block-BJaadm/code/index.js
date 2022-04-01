let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName=persons.name;
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=persons.grade;
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=persons.sex;
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
peopleName.startwith('J');
peopleName.startwith('P');
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
peopleName.startwith('A');
peopleName.startwith('C');
// Log all the filtered male ('M') in persons array
console.log(peopleSex.sex=='M');
// Log all the filtered female ('F') in persons array
console.log(peopleSex.sex=='F');
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(peopleSex.sex=='F').startwith('c');
console.log(peopleSex.sex=='F').startwith('J');
// Log all the even numbers from peopleGrade array
function even(num){
  return num % 2==0;
}
let evenNum=peopleGrade.filter(even);
// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.name.startwith('J'));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.name.startwith('P'));
// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.name.startwith('J') && persons.grade>10 && persons.sex=='F');
// Filter all the female from persons array and store in femalePersons array
let femalePersons=persons.sex=='F';
// Filter all the male from persons array and store in malePersons array
let MalePersons=persons.sex=='M';
// Find the sum of all grades and store in gradeTotal
let gradeTotal=grade.reduce((acc,gr)=>{
  return acc + gr;
});
// Find the average grade
let averageGrade=grade.sort((a,b)=>a.length-b.length).pop();
// Find the average grade of male
let averageMale=MalePersons.sort((a,b)=>a.length-b.length).pop();
// Find the average grade of female
let averageFemale=femalePersons.sort((a,b)=>a.length-b.length).pop();
// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort();
// Sort the peopleGrade in descending order
peopleGrade.sort(-1);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort()
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
peopleName.sort();