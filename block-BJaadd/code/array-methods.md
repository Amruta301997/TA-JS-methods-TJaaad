Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

3. `flat`
 Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3,[4,5,6,[7,8,[9,11,12[23]]]]];
     numbers.flat(0); //[1,2,3,4]
      numbers.flat(2);
       numbers.flat(infinity);
     ```
   -flat is creating flat structure of array.

4. `push`
 Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array with adding a new value
   - Example:
     ```js
     let numbers = [1, 2, 3,[4,5,6,[7,8,[9,11,12[23]]]]];
     numbers.push(234);
      
     numbers.push(111);
     
     ```
   -

5. `indexOf`-Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: index of array (number)
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     numbers.indexOf('3');
     numbers.shift('6');

indexOf-finding the index of element.If value is not present it returns -1.

6. `lastIndexOf`
Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: index of array (number)
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     numbers.lastIndexOf();
     colors.lastIndexOf();

indexOf-finding the total number index of element.If value is not present it returns -1.


7. `includes`
Parameter: n (any) number of values (number, string)
   - Return: booleans value that 'true' of 'false'
   - Example:
     ```js
     let colors=['blue','pink','orange','green','yellow','purple'];
     colors.includes('nk');//true
     colors.includes('purplrABC');//false

includes-finding any string or number in an array that result true or false.

8. `reverse`-
Parameter: n (any) number of values (number, string)
   - Return: a single array 
   - Example:
     ```js
     let colors=['blue','pink','orange','green','yellow','purple'];
     colors.reverse();
     numbers.reverse();


reverse-reversing the index of array.

9. `every`
Parameter: n (any) number of values (number, string etc)
   - Return:only one value that boolean values(true or false)
   - Example:
     ```js
    let colors=['blue','pink','orange','green','yellow','purple'];
    let returnColors = colors.every(function(color)){
      return color.includes("g");
    });
  //false - In an array ,in every colors 'g' is not present.It checks whole array element.


10. `shift`-
 Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array with removing a value shifting other index of array.
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     numbers.shift();
     numbers.shift(6);
shift-removing first element and shifting the other element to the lower index.


11. `splice`/21. `slice`-
parameter-n(any index of array)
return-single array with removing specific element of the array.
```js
let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
numbers.splice('9');
     let colors=['blue','pink','orange','green','yellow','purple'];
     colors.splice('yellow');
```


splice-removing any specific element of the array.

12. `find`
parameter:callback function(number or string,index)
return-true or false(boolean values)
 - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     function isThree(number){
        return number == 3;
     }
    let findThree = numbers.find(isThree);


13. `unshift`
 Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array with addingg a value shifting other index of array.
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     numbers.unshift(67);
     numbers.unshift(77);
shift-adding element of the start of the element.



14. `findIndex`
parameter:callback function(number or string,index)
return-true or false(boolean values)
 - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     function isThree(number){
        return number == 3;
     }
    let findIndexThree = numbers.findIndex(isThree);


15. `filter`
parameter-n(number,index)
return:boolean value(true or false)
 ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     function isEven(number){
       return number % 2 ===0;
     }
     let evenNum=numbers.filter(isEven);
     console.log(evenNum);
 ```    
 filter-filter function filter out some values.

17. `forEach`
Parameter: callback function
   - Return: does not return any value.
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     function log(num){
       console.log(num);
     }
     numbers.forEach(log);
OR
     numbers.forEach(funcion(num)){
       console.log(num);
     }


18. `map`Parameter: n (any) number of values (number, index, array etc)
   - Return: same size of Array.
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     function double(number){
       console.log(number);
       return number * 2;
     }
     let doubleNum=numbers.map(double);
    console.log(doubleNum);
     

19. `pop`
 Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array with removing any value
   - Example:
     ```js
     let numbers = [1, 2, 3,[4,5,6,[7,8,[9,11,12[23]]]]];
     numbers.pop(234);
      
     numbers.pop(111);
     



20. `reduce`-
 Parameter: callback function(accumulator,current value,index ,array) , initial value.
   - Return: any kind of value(number,string,object,array)
   - Example:
     ```js
     let numbers = [1, 2, 3,4,5,6,7,8,9,11,1223];
     let sum=numbers.reduce((acc,num))=>{
       return acc+num;
     },0);

reduce-reducing collection of value into different shape of value or single value.
     


22. `some`
Parameter: n (any) number of values (number, string etc)
   - Return:only one value that boolean values(true or false)
   - Example:
     ```js
    let colors=['blue','pink','orange','green','yellow','purple'];
    let returnColors = colors.some(function(color)){
      return color.includes("rang");
    });
    //true
```
