// set
// stores unique values
// can store anything objects, arrays, vars etc
// not indexed, does not support random access like set[1]
// sets is implemented using hashmap

let arr = [1,2,3]
let set = new Set(arr);
set.add(3); 


// add
set.add(5);
//console.log(set)

// delete 
set.delete(5);
//console.log(set)


// adding objects
let obj = {
    name: "Anupam",
    age: 22
}

set.add(obj);
//console.log(set)


// .has returns wether set has that element returns bool
// .has O(1)
//console.log(set.has(1));
//console.log(set.has(10));


// .size()  not length
// size is a property not method

//console.log(set.size);

const str1 = "anu"
const set1 = new Set("anu");  // iterates through string - 'a' 'n' 'u'
set1.add(str1);
//console.log(set1);  // { 'a', 'n', 'u' , 'anu'}

const set2 = new Set([123]); // 123
set.add(123)
//console.log(set2);  // {123}


//.clear empties the entire set
console.log(set1.clear());


// sets can be iterated

for(let val of set1)
    {
        console.log("val: ", val);
        }



// WeakSet
// can only store objects
// cannot interate

let ws = new WeakSet();

let obj1 = {
    name:"anupam"
}

let obj2 = {
    age:22
}
ws.add(obj1);
ws.add(obj2);
console.log(ws)


// .has
console.log(ws.has(obj1));

// .delete
console.log(ws.delete(obj1));

console.log(ws);