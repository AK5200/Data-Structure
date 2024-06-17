// Implementing stack using arrays

// class Stack{

//     constructor(element)
//     {
//          this.stack = [];
//     }

//     push(element)
//     {
//         this.stack.push(element);
//     }

//     pop()
//     {
//          if(this.isEmpty())
//             {
//                 throw new Error("Stack is empty");
//             }

//             return this.stack.pop();
//     }

//     peek()
//     {
//         if(this.isEmpty())
//             {
//                 throw new Error("Stack is empty");
//             }

//            return this.stack[this.stack.length - 1];
//     }

//     isEmpty()
//     {
//         return this.stack.length == 0;
//     }


// }


// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.pop());
// console.log(stack.peek());
// stack.pop();
// stack.pop();



class Stack1{

    constructor(element)
    {
        this.stack = [];
    }

    push(element)
    {
        this.stack.push(element);
    }

    pop()
    {
        if(this.isEmpty())
        throw new Error("Stack is empty");

        return this.stack.pop();
    }

    peek()
    {
        if(this.isEmpty())
        throw new Error("Stack is empty");

        return this.stack[this.stack.length-1];
    }

    isEmpty()
    {
        return this.stack.length == 0;
    }

    print()
    {
        for(let x in this.stack)
            {
                console.log(this.stack[x]);
            }
    }

    get length()
    {
        return this.stack.length;
    }
}


let stack1 = new Stack1();


// reverse words "an apple a day" => "day a apple an"

// const org = "an apple a day";
// let rev = "";

// let split = org.split(" ");   // "an", "apple", "a", "day"

// for(let i in split)
//     {
//         stack1.push(split[i]);
//     }

 
//  while(stack1.length>0)
//     {
//         let curr = stack1.pop();
//         console.log(curr);
        
//         if (rev === "") {
//             rev = curr;
//         } else {
//             rev = rev + " " + curr;
//         }

//     }

// console.log(rev.trim());




// valid parentheses

let stack = new Stack1();

const org = "{}[{{{{}}}}]";


for(x of org)
    {
        if(x =='{' || x =='[' || x == '(')
            stack.push(x);

        else if (x == ']' && stack.peek()=='[')
            stack.pop();    

        else if (x == '}' && stack.peek()=='{')
            stack.pop();
        
        else if (x == ')' && stack.peek()=='(')
            stack.pop();    
    }

    console.log(stack.isEmpty());



