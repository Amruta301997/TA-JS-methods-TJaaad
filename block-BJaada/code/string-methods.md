Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
 Parameter:  string(string datatype)
   - Return: string(string data type)
   - Example:
```js
      let message="hello world";
     console.log(message.toUpperCase());//HELLO WORLD
```
toUpperCase-string that convert lower case to upeer case

 
3. `toLowerCase`
 Parameter:  none
   - Return: string(string data type)
   - Example:
```js
      let message="HELLO WORLD";
     console.log(message.toLowerCase());//hello world
```
toLowerCase-string that convert  upeer case to lower case.

4. `trim`
 Parameter:  none
   - Return: string(string data type)
   - Example:
```js
      let message=" hello world ";
     console.log(message.trim());//hello world
```
trim-it will remove all the white spaces.

5. `trimEnd`
Parameter:  none
   - Return: string(string data type)
   - Example:
```js
      let message=" hello world ";
     console.log(message.trimEnd());// hello world
```
trim-it will remove all the white spaces at the last.


6. `trimStart`
Parameter:  none
   - Return: string(string data type)
   - Example:
```js
      let message=" hello world ";
     console.log(message.trimStart());//hello world
```
trim-it will remove the white spaces from the start.

7. `concat`
-  Parameter:  concatenate to str. - (number data type)
   - Return:returns a new string(string data type)
   - Example:
     ```js
     const str1 = 'Hello';
     const str2 = 'World';
     console.log(str1.concat(' ', str2));
     ```
     Concat-The concat() function concatenates the string arguments to the calling string and returns a new string. 


8. `endsWith`
 Parameter:characters to be searched for at the end of str. - (string data type)
   - Return:true or false(string data type)
   - Example:
     ```js
    
     let str = 'To be, or not to be, that is the question.'
      console.log(str.endsWith('question.'))  // true
      console.log(str.endsWith('to be',19))      // true
     ```
     endsWith-a string ends with the characters of a specified string, returning true or false


9. `includes`
- Parameter:  A string to be searched for within str. - (string data type)
   - Return:true o false(string data type)
   - Example:
     ```js
     const str = 'To be, or not to be, that is the question.'
     console.log(str.includes('To be'))        // true
     console.log(str.includes('question'))     // true
     console.log(str.includes('nonexistent'))  // false
     ```
     includes-one string may be found within another string,it returns true or false.

10. `indexOf`
 Parameter: The indexOf() method, given one argument: - (string data type)
   - Return:index of character(number data type)
   - Example:
     ```js
     const str = 'To be, or not to be, that is the question.'
     console.log(str.indexOf('To be'))        // 3
     console.log(str.indexOf('question'))     // 41
     console.log(str.indexOf('nonexistent'))  // -1
     ```
     indexOf-it returns index of specific character that you want.

11. `lastIndexOf`
 Parameter: The indexOf() method, given one argument: - (string data type)
   - Return:index of character(number data type)
   - Example:
     ```js
     const str = 'To be, or not to be, that is the question.'
     console.log(str.lastIndexOf('e'))        // 35
     
     ```
     lastIndexOf-it returns index of specific character that you want.


12. `padEnd`
Parameter: padding to the string - (string data type)
   - Return:index of character(string data type)
   - Example:
     ```js
     const str = 'To be, or not to be, that is the question.'
     console.log(str.padEnd('5','.')) ;       // To be, or not to be, that is the question......
      console.log(str.padEnd('5','0')) ;//To be, or not to be, that is the question.00000
     ```
     padEnd-adding any specific character at the end that you want.


13. `padStart`
Parameter: padding to the string - (string data type)
   - Return:index of character(string data type)
   - Example:
     ```js
     const str = 'To be, or not to be, that is the question.'
     console.log(str.padStart('5','.')) ;       // .....To be, or not to be, that is the question.
      console.log(str.padStart('5','0')) ;//00000To be, or not to be, that is the question.
     ```
     padEnd-adding any specific character at the start that you want.


14. `repeat`
Parameter: repeat the string - (string data type)
   - Return:string(string data type)
   - Example:
     ```js
     const str = 'To be, or not to be, that is the question.'
     console.log(str.repeat(2)) ;       // To be, or not to be, that is the question. To be, or not to be, that is the question.
      console.log(str.padStart('To be','3')) ;//To beTo beTo beTo be.
     ```
     If you want repeat sentance or word how many times it repeat.



15. `replace`
Parameter: repeat the string - (string data type)
   - Return:string(string data type)
   - Example:
     ```js
     const str = 'To be, or not to be, that is the question.'
     console.log(str.replace('or','OR')) ;       // To be, OR not to be, that is the question. To be, or not to be, that is the question.
     
     ```
     replace any word or sentence 


16. `slice`


17. `split`


18. `substring`

