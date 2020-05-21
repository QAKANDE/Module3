// Given a string, return the character that is most
// commonly used in the string.
function maxChar(array)
{
strArray = array.split("")
maxFrequency = 1;
counter = 0;
let highestFreqChar ;
for (let i = 0 ; i<strArray.length ; i++)
{
    for (let w = i ; w<strArray.length ; w++)
    {
        if (strArray[i] == strArray[w])
            {
                counter++
                if(maxFrequency < counter)
                {
                    maxFrequency = counter;
                    highestFreqChar = strArray[i]
                }
            }
    }
    counter = 0;
}
return highestFreqChar;
}
let firstString = "abcccccccd"
let secondString = "apple 1231111" 
console.log(maxChar(firstString))
console.log(maxChar(secondString))
// Check to see if two provided strings are anagrams of each other.
function anagramCompare(string1 , string2)
{
    let stringA = string1.replace(/[^\w]/g ,'').toLowerCase().split("").sort().join().trim()
    let stringB = string2.replace(/[^\w]/g ,'').toLowerCase().split("").sort().join().trim()
    if (stringA === stringB)
    {
        return true;
    }
    else
    {
        return false;
    }
}
let stringA = 'rail safety' 
let stringB = 'fairy tales'
let stringC = 'RAIL! SAFETY!' 
let stringD= 'fairy tales'
let stringE = 'Hi there'
let stringF = 'Bye there'
console.log(anagramCompare(stringA , stringB))
console.log(anagramCompare(stringC , stringD))
console.log(anagramCompare(stringE , stringF))
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
function palindrome(str)
{
    let arrayStr = str.split("").reverse().join("")
    if (str === arrayStr)
    {
        return true ; 
    }
    else {
        return false ;
    }
}
console.log(palindrome("abba"))
console.log(palindrome("abcdefg")) 
// Given an integer, return an integer that is the reverse
// ordering of numbers.
function reverseInt(integer)
{
    let reverseInteger = integer.toString().split("").reverse().join("")
    return parseInt(reverseInteger) * Math.sign(integer);
}
console.log(reverseInt(13))
console.log(reverseInt(-13))
console.log(reverseInt(500))
console.log(reverseInt(-500))
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
function steps(numberOfSteps)
{
    for (i=1 ; i<=numberOfSteps ; i++)
    {
        console.log("#".repeat(i) + ' '.repeat(numberOfSteps-i))
    }
}
steps(2)
steps(3)
// Given a string, return a new string with the reversed
// order of characters
function reverseString(str)
{
    let revStr = str.split("").reverse().join("")
    return revStr;
}
console.log(reverseString('apple'))
console.log(reverseString('hello'))
console.log(reverseString('Greetings'))
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
function chunk(array , size)
{
    resultArray = []
    for (let i = 0 ; i<size ; i++)
    {
        resultArray.push(new Array(array).fill(5))
    }
  return  resultArray;
}
console.log(chunk(1,2))
console.log(chunk(1,3))
console.log(chunk(1,4))

// function range1(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         ans.push(i);
//     }
//     return ans;
// }
// console.log(range1(2,4))
// function range2(start, end) {
//     return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
// }
// console.log(range2(2,4))

function socks(n)
{
    Arr3 = [];
    for (let i=1 ; i<=n ;i++)
        {
            Arr3.push(i)

        }
        Arr3[0]= 3;
        return Arr3;
}

console.log(socks(5))
var arrObject = new Array("val1","val2");
arrObject.val1 = 'name'
console.log(arrObject)


function sockMerchant(n, ar) {
    let counter = 0;
    let  count = 0;
    //
    for (let i = 0; i < ar.length; i++) {
        count = 1;
        //
        for (let j = i+1 ; j < ar.length; j++) {
            if (ar[i] == ar[j]) {
                count++;
            }
        }

        if (count % 2 == 0) {
            counter++;
        }
    }

    return counter;
}

let array = [10,20,20,10,10,30,50,10,20]
console.log(sockMerchant(9,array))

function countingValleys(n, s) {
    let newArray = s.split("");
    let arrayLength = newArray.length ; 
    let numberOfValleys = n / arrayLength;
    return numberOfValleys;
    }
steps = 'UDDDUDUU'
console.log(countingValleys(8 , steps))    