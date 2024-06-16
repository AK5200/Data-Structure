// Implementing stack using arrays

class Stack{

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
            {
                throw new Error("Stack is empty");
            }

            return this.stack.pop();
    }

    peek()
    {
        if(this.isEmpty())
            {
                throw new Error("Stack is empty");
            }

           return this.stack[this.stack.length - 1];
    }

    isEmpty()
    {
        return this.stack.length == 0;
    }


}


const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());
console.log(stack.peek());
stack.pop();
stack.pop();