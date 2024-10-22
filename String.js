//reverse string;
function reverse(string){
    let reversed=""
    for(let i = string.length - 1;i>0;i--){
        reversed+=string[i]
    }
    return string
}
let input1="shaheryar"
console.log(reverse(input1))


//findLength
function findLength(string){
    let length=0;
    for(let i = 0;i<string.length;i++){
        length++
    }
    return length
}
console.log(findLength(input1));


//Check if a String is a Palindrome

function isPalindrome(string){
    let start = 0 ;
    let end = string.length -1 ;
    while(start <end){
        if(string[start]!== string[end]){
            return false;
        }
        start ++
        end--
    }
    return true;
}

console.log(isPalindrome(input1));

//non repeating character
function findNonRepeatingChar(str){
    let charCount = new Map()

    for(let i = 0 ; i<str.length;i++){
        let char = str[i];
        if(charCount.has(count)){
            charCount.set(count,charCount.get(char)+1)
        }else{
            charCount.set(count,1)
        }
    }
    for(let i = 0 ; i<str.length;i++){
        if(charCount.get(str[i])===1){
            return str[i]
        }
    }
    return null;
}


//rever
function reverse(str){
    let reversed =""
    for(let i = str.length-1;i>0;i--){
        reversed+=str[i]
    }
    return reversed;
}

//findLength

function length(str){
    let length=0;
    for(let i =0;i<str.length;i++){
        length++
    }
    return length;
}

//check if a String is a Palindrome

function findPalindrome(str){
    let start = 0;
    let end = str.length-1;

    while(start < length){
        if(str[start] !== str[end]){
            return false
        }
        start ++ 
        end--
    }
    return true;
}


function firstNonRepeatingChar(str){
    let charCount = new Map()
    for(let i = 0 ; i<str.length;i++){
        if(charCount.has(char)){
            charCount.set(char,charCount.get(char)+1)
        }else{

            charCount.set(char,1)
        }
    }
    for(let i = 0 ; i<str.length;i++){
        if(charCount.get(str[i]===1)){
            return str[i]
        }
    }
    return null;
}

//findMissingNumber

function findMissingNumber(arr,n){
    let totalSum = (n*(n+1)/2);
    let arraySum=0;

    for(let i=0;i<arr.length;i++){
        arraySum+=sum[i]
    }
    return totalSum - arraySum;
}

let arr =[1,2,3,4,5,6]
let n =6;
findMissingNumber(arr,n);

