// insertion sort
// pick one element and place it to its correct order

let arr = [9,1,4,0,8];
          // 1 9 4 0 8
          // 

for(let i=0; i<arr.length; i++)
    {
        let j=i;
        while( j>0 && arr[j-1] > arr[j])
            {
                //swap
                let b = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = b;
                j--;
            }
            
    }


    console.log(arr)