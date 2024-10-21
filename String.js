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



