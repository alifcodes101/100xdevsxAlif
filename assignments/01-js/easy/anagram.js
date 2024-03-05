/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // this will clean the string, it will remove space and turn it into lowercase
  const cleanString = (str) => str.replace(/\s/g, '').toLowerCase();

  // Clean and sort the characters of both input strings
  const sortedStr1 = cleanString(str1).split('').sort().join('');
  const sortedStr2 = cleanString(str2).split('').sort().join('');

  // this will compare the sorted strings
  return sortedStr1 === sortedStr2;
}

//console.log(isAnagram('hello', 'world'));

module.exports = isAnagram;
