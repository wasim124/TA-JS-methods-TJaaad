let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. 
//(Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr){
  return[...arr].sort((a,b) => a.length -b.length).pop();
}
findLongestWord(words);

// - Convert the above array "words" into an array of length of word instead of word.

let wordLength = words.map((w) => w.length);


// - Create a new array that only contains word with atleast one vowel.

function vowelCheck(words){
  return(words.toLowerCase().includes('a') || 
  words.toLowerCase().includes('e') || 
  words.toLowerCase().includes('i') ||
  words.toLowerCase().includes('o') ||
  words.toLowerCase().includes('u') );
}

let vowelFilter = words.filter((w ) => vowelCheck(w));

// - Find the index of the word "rhythm"

words.findIndex((w ) => w === "rhythm");

// - Create a new array that contians words not starting with vowel.

let notStartWithVowel = words.filter((w ) => !vowelCheck(w[0]));

// - Create a new array that contianse words not ending with vowel

let notEndWithVowel = words.filter((w ) => !vowelCheck(w[w.length - 1]));


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray (num){
  return num.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  });
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multipliedByThree = numbers.filter(
  (num) => num % 3 === 0
);

// - Create a new array that contains only even numbers

let even = numbers.filter((num) => num % 2 ===0);

// - Create  a new array that contains only odd numbers.

let odd = numbers.filter((num) => num % 2 !==0);

// - Create a new array that should have true for even number and false for odd numbers.

let oddEven = numbers.map((num) => num % 2 ===0);

// - Sort the above number in assending order.

let sorted = [...numbers].sort((a,b) => a-b);

// - Does sort mutate the original array?

//YES

// - Find the sum of the numbers in the array.

let sum = numbers.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  });


//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers


function averageNumbers(num){
  return num.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  }) / num.length;
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


function averageWordLength(word){
  return ( word.map((W) => W.length)
    .reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  }) / word.length);
}