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
let target = 121;

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]=== target){
            return mid
        }
        else if(arr[mid]<target){
            start = mid +1;
        }
        else if(arr[mid]>target){
            end = mid -1
        }
        
    }
    return -1


}

console.log(binarySearch(arr4,target))

let arr5=[10,20,30,40];
let index = arr5.indexOf(30)
console.log(index)

//two sum



let arr6=[3,4,5,6,7] ;
target = 8;

function twoSum(arr,target){
    let map = new Map()
    for(let i = 0 ; i < arr.length;i++){
        let complement = target - arr[i]
    if(map.has(complement)){
        return [map.get(complement),i]
    }
    map.set(arr[i],i)
    }
    return []
}

console.log(twoSum(arr6,target));

function moveZeroesToEnd(arr) {
    let nonZeroIndex = 0; // Non-zero numbers k liye jagah set karne ke liye

    // Step 1: Non-zero numbers ko agay le aana
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) { // Agar number zero nahi hai
            arr[nonZeroIndex] = arr[i]; // Usko agay place kar do
            nonZeroIndex++; // Agli jagah k liye move ho jao
        }
    }

    // Step 2: Baaki positions ko zero karna
    while (nonZeroIndex < arr.length) {
        arr[nonZeroIndex] = 0; // Baaqi positions ko 0 se fill kar do
        nonZeroIndex++; // Agli position par jao
    }

    return arr; // Modified array wapas karo
}

let arr = [0, 1, 0, 3, 12];
console.log(moveZeroesToEnd(arr));  //

let arr7=[1, 2, 3, 4, 5]
let arr8=[5, 2, 31, 4, 5]

function isSorted(arr){
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true;
}

function secondLargest(){
    let first = -Infinity;
    let second = -Infinity

    for(let i = 0 ; i < arr.length;i++){
        if(arr[i] > first){
            second = first;
            first=arr[i]
        }else if (arr[i]>second && arr[i] !== first){
            second=arr[i];
        }
    }
    return second === -Infinity?null:second
}