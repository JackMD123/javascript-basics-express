const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    index = index - array.length;
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newarray = [];
  array.forEach(item => {
    newarray.push(item);
  });
  newarray.push(element);
  return newarray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const newarray1 = [];
  numbers.forEach(item => {
    newarray1.push(String(item));
  });
  return newarray1;
};
const uppercaseWordsInArray = strings => {
  const newarray = [];
  strings.forEach(item => {
    newarray.push(item.toUpperCase());
  });
  return newarray;
};

const reverseWordsInArray = strings => {
  const newarray = [];
  strings.forEach(item => {
    let stringasarray = item.split('');
    stringasarray.reverse();
    newarray.push(stringasarray.join(''));
  });
  return newarray;
};

const onlyEven = numbers => {
  const newArray = [];
  numbers.forEach(item => {
    if (item % 2 === 0) {
      newArray.push(item);
    }
  });
  return newArray;
};

const removeNthElement2 = (index, array) => {
  const newArray = array.filter(item => {
    return item !== array[index];
  });
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  const newArray = strings.filter(item => {
    return vowels.includes(item[0]);
  });
  return newArray;
};
const removeSpaces = string => {
  const array = string.split(' ');
  const newArray = array.map(item => {
    return item.trim();
  });
  return newArray.join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
};
const sortByLastLetter = strings => {
  const names = ['andy', 'billy', 'matt'];
  names.sort((a, b) => {
    if (a.charAt(a.length - 1) < b.charAt(a.length - 1)) {
      return -1;
    }
    if (a.charAt(a.length - 1) > b.charAt(a.length - 1)) {
      return 1;
    }
    // names must be equal
    return 0;
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
