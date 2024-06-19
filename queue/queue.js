// QUEUE
// FIFO
//    F ----- R
// we not need to check overflow condition, as array are dynamic

class Queue
{
    constructor()
    {
        this.queue = [];
    }

    enqueue(element)
    {
        this.queue.push(element);
    }

    dequeue()
    {
        if(this.isEmpty())
            throw new Error("Empty");

        return this.queue.shift();
    }

    isEmpty()
    {
        return this.queue.length === 0;
    }

    size()
    {
        return this.queue.length;
    }

    front()
    {
        return this.queue[0];
    }

    print()
    {
        for(let i=0;i< this.queue.length; i++)
            {
                console.log(this.queue[i]);
            }
    }

}

    const myQueue = new Queue();

    myQueue.enqueue(5);
    myQueue.enqueue(3);
    myQueue.enqueue(2);
    myQueue.dequeue();
    console.log(myQueue.print());
