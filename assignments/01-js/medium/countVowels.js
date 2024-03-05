/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  //converts the input string to lowercase
  const lowercasedStr = str.toLowerCase();

  //defining the vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  //using the filter methold to keep the vowels and count them
  const vowelCount = lowercasedStr.split('').filter(char => vowels.includes(char)).length;

  return vowelCount;
}

module.exports = countVowels;