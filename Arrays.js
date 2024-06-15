// used to hold multiple values in a single variable
// 0-indexed
// can hold various data types


// Declaration two ways-
// 1- Array literal

 let array1 = ["Anupam","Deepak","Ankit"];

 console.log(array1); //
 console.log(array1[2]);


 // 2- Array Constructor

 let array2 = new Array("HTML","CSS","JS");
 array2.push("GO");  
 console.log(array2)          // ['HTML', 'CSS', 'JS', 'GO']
 array2.unshift("RUST")     
 console.log(array2)          // ['RUST', 'HTML', 'CSS', 'JS', 'GO']
 array2.shift();
 console.log(array2)          //  ['HTML', 'CSS', 'JS', 'GO']




 // iteration

 for(let i=0; i< array2.length; i++)
    {
        console.log(array2[i]);
    }


// toString()
// console.log(array2.toString());


console.log(typeof array2)  // object   as elements are string

let array3 = new Array(1,2,3,4,5);

console.log(typeof array3)  // object

const numbers1 = [5];
const numbers2 = new Array(5);

console.log(numbers1);   // 5
console.log(numbers2)    // 5 [empty * 5]




