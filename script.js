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

let { min, max } = findMax(arr2);
console.log(`Minimum: ${min}, Maximum: ${max}`);

//moveZeroesToEnd
let arr3=[10,0,20,40,-100,50,0,0,0];

function moveNonZeroToEnd(arr){
    let nonZeroIndex = 0 ;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[nonZeroIndex] = arr[i]
            nonZeroIndex++
        }
       
    }
    while(nonZeroIndex < arr.length){
        arr[nonZeroIndex] = 0
        nonZeroIndex++
    }
    return arr;
}

console.log(moveNonZeroToEnd(arr3))

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length -1;

    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            start=mid+1
        }
        else if(arr[mid]> target){
            end = mid -1
        }
        
    }
    return -1;
}
let arr4 = [1, 3, 5, 7, 9, 11];
let target = 7;
