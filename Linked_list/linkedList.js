// Linked list

// class Node
// {
//     constructor(data)
//     {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList
// {
//     constructor()
//     {
//         this.head = null;
//     }

//     addFirst(data)
//     {
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;

//     }

//     addLast(data)
//     {
//         const newNode = new Node(data);
        
//         if(!this.head)
//             {
//                 this.head = newNode;
//                 return;
//             }

//         let current = this.head;

//         while(current.next)
//             {
//                 current.next;
//             }

//             current.next = newNode;
//             newNode.next = null;
//       }

//       size()
//       {
//         let count = 0;
//         let current = this.head;
//         while(current)
//             {
//                 count++;

//             }

//       }


//       addAt(index,data)
//       {
//         if(index < 0 || index > this.size())
//             {
//                 return new Error("Invalid index");
//             }

//             const newNode = new Node(data);

//             if(index==0)
//             addFirst();

//             let current = this.head;

//             for(let i=0; i< index-1;i++)
//                 {
//                     current = current.next;
//                 }
                    //        5
                   //  1----2----3-----4
//                 newNode.next = current.next;
//                 current.next = newNode;
//          }


//          print()
//          {
//             let current = this.head;

//             while(current)
//                 {
//                     console.log(current.data);
//                     current = current.next;
//                 }
//          }


//          delFirst()
//          {
//             if(this.head == null)
//                 {
//                     throw new Error("Linked list is empty");
//                 }
//             this.head = this.head.next;
//          }

//          delLast()
//          {
//             if(!this.head)
//                 return;

//             let element = this.head;
//             // 1  2   3  4   5
//             while(element.next.next)
//                 {
//                     element = element.next;
//                 }

//                 element.next = null;
//          }

//          delAt(index)
//          {
//             // if(index < 0 || index > this.size())
//             //     throw new error("Invalid index");

//             let element = this.head;

//             for(let i=0; i<index-1;i++)
//                 {
//                     element = element.next;
//                 }

//                 if(element.next)
//                 element.next = element.next.next;
//          }



// } 



// const linkedlist = new LinkedList();

// linkedlist.addFirst(1);
// linkedlist.addFirst(2);
// linkedlist.addFirst(3);
// linkedlist.addAt(3,5);
// linkedlist.print();




// class Node{
//     constructor(data)
//     {
//         this.data = data;
//         this.next = null;
//     }
// }


// class LinkedList
// {
//     constructor()
//     {
//         this.head = null;
//     }

//     addfirst(x)
//     {
//         const newNode = new Node(x);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     addlast(x)
//     {
//         const newNode = new Node(x);

//         if(!this.head)
//             {
//                 this.head = newNode;
//                 return;
//             }

//         const curr = head;

//         while(curr.next)
//             {
//                 curr = curr.next;
//             }

//             curr.next = newNode;


//     }


//     delfirst()
//     {
//         if(!this.head)
//             throw new Error("Linked list is empty");
         
//         this.head = this.head.next;

//     }

//     dellast()
//     {
//         if(!this.head)
//             throw new Error("Linked list is empty");

//         let current = this.head;


//         // 1  -  2   -  3   -   4
//         while(current.next.next)
//             {
//                 current = current.next;
//             }

//             current.next = null;
//     }


//     print()
//     {
//         let curr = this.head;

//         while(curr)
//             {
//                 console.log(curr.data);
//                 curr = curr.next;
//             }
//     }
//     addat(ind,x)
//     {
//         if(ind < 0 && ind > this.size())
//             throw new Error("Invalid index");

//         const newNode = new Node();

//         if(ind == 0)
//             this.addfirst(x);

//         let element = this.head;

//         while(element < ind - 1)
//             {
//                 element = element.next;
//             }
//              //      5
//             //1 -- 2 -- 3 --4

//             newNode.next = element.next;
//             element.next = newNode;



//     }
// }




// doubly linked list


class Node{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class Doublyll
{
    constructor()
    {
        this.head = null;
    }

    addfirst(data)
    {
        const newNode = new Node(data);
         //       H
        // 1  -   2  -   3   -   4
        newNode.next = this.head;

        if(this.head)
        this.head.prev =  newNode;

        this.head = newNode;
    }


    addlast(data)
    {
        const newNode = new Node(data);

        if(!this.head){
        this.addfirst(data);
        return;
        }


        // 1   -   2   -   3     -   4

        let element = this.head;

        while(element.next)
            {
                element = element.next;
            }

            element.next = newNode;
            newNode.prev = element;
    }


    print()
    {
        if(!this.head)
            return;

        let element = this.head;

        while(element)
            {
                console.log(element.data);
                element = element.next;
            }
    }


    size()
    {
        if(!this.head)
            return 0;

        let element = this.head;
        let count = 0;

        while(element)
            {
                element = element.next;
                count++;
            }

            return count;
    }


    addat(index,data)
    {
        const newNode = new Node(data);
        let element = this.head;
        let i=0;

        while(element && i < index -1)
            {
                element = element.next;
                i++;
            } 

            // 1 -- 2 -- 3 -- 4 -- 5 -- 6

            if(!element)
                {
                    throw new Error("Index out of bounds");
                }

                newNode.next = element.next;
                newNode.prev = element;

                if(element.next)
                    {
                        element.next.prev = newNode;
                    }

                    element.next = newNode;

    }

  






} 


const node1 = new Doublyll();

node1.addfirst(1);
node1.addfirst(2);
node1.addlast(3);
node1.print();
node1.addat(1,5);
node1.print();
