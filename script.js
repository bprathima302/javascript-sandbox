
function insertionSort2(n, arr) {
    // Write your code here
    for(let i=1; i<=arr.length-1; i++){
        let k= i;
        for(j=i-1; j>=0; j--){
            if(arr[k] < arr[j]){
                let temp = arr[k];
                arr[k]= arr[j];
                arr[j]= temp;
                k--;
            }
        }
        console.log(...arr);
    }
}

insertionSort2(5, [7, 8, 6, 5, 4, 3, 2, 1])