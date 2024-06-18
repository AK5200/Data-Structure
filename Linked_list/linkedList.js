// Linked list

class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
    }

    addFirst(data)
    {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;

    }

    addLast(data)
    {
        const newNode = new Node(data);
        
        if(!this.head)
            {
                this.head = newNode;
                return;
            }

        let current = this.head;

        while(current.next)
            {
                current.next;
            }

            current.next = newNode;
            newNode.next = null;
      }

      size()
      {
        let count = 0;
        let current = this.head;
        while(current)
            {
                count++;

            }

      }


      addAt(index,data)
      {
        if(index < 0 || index > this.size())
            {
                return new Error("Invalid index");
            }

            const newNode = new Node(data);

            if(index==0)
            addFirst();

            let current = this.head;

            for(let i=0; i< index-1;i++)
                {
                    current = current.next;
                }

                newNode.next = current.next;
                current.next = newNode;
         }


         print()
         {
            let current = this.head;

            while(current)
                {
                    console.log(current.data);
                    current = current.next;
                }
         }


         delFirst()
         {
            if(this.head == null)
                {
                    throw new Error("Linked list is empty");
                }
            this.head = this.head.next;
         }

         delLast()
         {
            if(!this.head)
                return;

            let element = this.head;
            // 1  2   3  4   5
            while(element.next.next)
                {
                    element = element.next;
                }

                element.next = null;
         }

         delAt(index)
         {
            // if(index < 0 || index > this.size())
            //     throw new error("Invalid index");

            let element = this.head;

            for(let i=0; i<index-1;i++)
                {
                    element = element.next;
                }

                if(element.next)
                element.next = element.next.next;
         }



} 



const linkedlist = new LinkedList();

linkedlist.addFirst(1);
linkedlist.addFirst(2);
linkedlist.addFirst(3);
linkedlist.addAt(3,5);
linkedlist.print();

