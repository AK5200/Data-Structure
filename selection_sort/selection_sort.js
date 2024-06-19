
// for each iteration find the minimum and swap with the current start index;
// in next iteration increase the start index and again find the minimum value
// best,avg,worst O(n^2)


let arr = [1,9,5,0,3,6];
let i = 0;

for(let i=0; i<arr.length-1; i++)
    {
        
        let mini = i;

        for(let j=i; j<arr.length; j++)
            {
                if(arr[j] < arr[mini])
                    mini = j;
            }

            // swap
            let bucket = arr[i];
            arr[i] = arr[mini];
            arr[mini] = bucket;
    }

    console.log(arr);


    