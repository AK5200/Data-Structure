// pushes maximum to the last by adjacent swapping
// best,avg,worst = O(n^2);
// best case can be optimized to O(n);
// by checking if we have zero swaps

let arr = [5,3,1,0,9]
let n = arr.length;

for(let i= n-1; i>=0; i--)
    {
        for(let j=0 ; j<i; j++)
            {
                if(arr[j] > arr[j+1])
                    {
                        let bucket = arr[j+1];
                        arr[j+1] = arr[j];
                        arr[j] = bucket;
                    }
            }
    }


    console.log(arr);