//reverse an array 

arr1=[1,2,3,4,5]

function reverse(arr){
    let start = 0;
    let end = arr.length -1;

    while(start<end){
        let temp = arr[start]
        arr[start]=arr[end]
        arr[end]=temp

        start++
        end--
    }
    return arr
}
console.log(reverse(arr1))

//Find the Maximum and Minimum in an Array

arr2=[1,5,10,100,-40,20]

function findMax(arr){
    let min= arr[0]
    let max = arr[0]

    for(let i = 1; i< arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return {min,max}
}

let result = findMax(arr2)
console.log(`${result.min} and ${result.max}`)