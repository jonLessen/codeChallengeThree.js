const findSum = function(arr) {
  return arr.reduce((acc, currentVal) => (acc + currentVal), 0);
};

const findFrequency = function(array) {
  const seenValues = {};
  array.forEach(letter => {
    const count = seenValues[letter];
    if (!count) {
      seenValues[letter] = 1;
    } else {
      seenValues[letter] = count + 1;
    }
  });
  let minLetter = null;
  let maxLetter = null;
  let minValue = null;
  let maxValue = null;

  Object.keys(seenValues).forEach(letter => {
    const count = seenValues[letter];
    if (!minValue || count < minValue) {
      minLetter = letter;
      minValue = count;
    }
    if (!maxValue || count > maxValue) {
      maxLetter = letter;
      maxValue = count;
    }
  });
  return { most: maxLetter, least: minLetter };
};

function isPalindrome(str) {
  const arrayValues = str.split('');
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');
  return str === reverseString;
}

const arr = [5, 1, 2, 3, 1, 4];
const largestPair = (arr = []) => {
  let first = 0;
  let second = 0;
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    first = arr[i];
    second = arr[i + 1];
    if (first * second > res) {
      res = first * second;
    }
  }
  return res;
};

const removeParenth = function(str) {
  return str.split(/\(.+\)/).join('');
};


let word = ("hello");

const scrabble = {
  a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8,
  k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1,
  u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
};

const scoreScrabble = [...word].reduce((accu, letter) => { return accu + scrabble[letter.toLowerCase()]; }, 0);
