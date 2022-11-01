//exercise 1 - word info
const word = prompt("give me a word:");
console.log(`The length is ${word.length}; in lowercase it's ${word.toLowerCase()}; in uppercase it's ${word.toUpperCase()}`);
//exercise 2 - vowel count
let vowelCount = 0;
const vowels = ['a','e','i','o','u'];

for (let char of word){
    if (vowels.includes(char)) {
        vowelCount ++;
    }
}

console.log(vowelCount);