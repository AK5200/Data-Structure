// QUEUE
// FIFO
//    F ----- R
// no need to check overflow condition, as array are dynamic

// class Queue
// {
//     constructor()
//     {
//         this.queue = [];
//     }

//     enqueue(element)
//     {
//         this.queue.push(element);
//     }

//     dequeue()
//     {
//         if(this.isEmpty())
//             throw new Error("Empty");

//         return this.queue.shift();
//     }

//     isEmpty()
//     {
//         return this.queue.length === 0;
//     }

//     size()
//     {
//         return this.queue.length;
//     }

//     front()
//     {
//         return this.queue[0];
//     }

//     print()
//     {
//         for(let i=0;i< this.queue.length; i++)
//             {
//                 console.log(this.queue[i]);
//             }
//     }

// }

//     const myQueue = new Queue();

//     myQueue.enqueue(5);
//     myQueue.enqueue(3);
//     myQueue.enqueue(2);
//     myQueue.dequeue();
//     console.log(myQueue.print());
//     console.log(myQueue.size());



// CIRCULAR QUEUE
// fixed size

class CircularQueue
{
    constructor(k)
    {
        this.queue = []
        this.size = k;
    }

    enQueue(element)
    {
        if(this.size === this.queue.length)
            throw new Error("queue is full");

        this.queue.push(element);
    }

    deQueue()
    {
        if(this.queue.length == 0)
            throw new Error("Queue is empty");

        this.queue.shift();
    }


    front()
    {
        if(this.queue.length === 0)
            throw new Error("Queue is empty");

        return this.queue[0];
    }

    rear()
    {
        if(this.queue.length === 0)
            throw new Error("Queue is empty");

        return this.queue[this.queue.length-1];
    }

    isEmpty()
    {
        return this.queue.length === 0;
    }

    isFull()
    {
        return this.queue.length === this.size;
    }
}


const cqueue = new CircularQueue(3);

cqueue.enQueue(3);
cqueue.enQueue(4);
cqueue.enQueue(5);


cqueue.deQueue();
cqueue.enQueue(1);
console.log(cqueue.front());
console.log(cqueue.rear());


