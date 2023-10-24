function bigSorting(unsorted) {
    // Write your code here
    let sortedArray = unsorted;
    for(let i in unsorted){
        for(j=0; j<=unsorted.length-1; j++){
            if(unsorted[j] >= unsorted[j+1]){
                let temp = unsorted[j];
                 unsorted[j] = unsorted[j+1];
                 unsorted[j+1] = temp;
            }
        }
    }
    return unsorted;
}

console.log(bigSorting([6,1,4,10,3]));
