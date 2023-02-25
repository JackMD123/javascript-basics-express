function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  if (a === true && b === true) {
    return false;
  }
  if (a === false && b === false) {
    return false;
  }
  return true;
}

function truthiness(a) {
  if (a === '' || a === null || a === undefined || Number.isNaN(a) || a === 0) {
    return false;
  }
  return true;
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2 === 1) {
    return true;
  }
  return false;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  return Math.sqrt(a) === Math.round(Math.sqrt(a));
}

function startsWith(a, b) {
  if (b[0] === a) {
    return true;
  }
  return false;
}

function containsVowels(a) {
  for (let i = 0; i < a.length; i = i + 1) {
    if (
      a[i] === 'a' ||
      a[i] === 'e' ||
      a[i] === 'i' ||
      a[i] === 'o' ||
      a[i] === 'u' ||
      a[i] === 'A' ||
      a[i] === 'E' ||
      a[i] === 'I' ||
      a[i] === 'O' ||
      a[i] === 'U'
    ) {
      return true;
    }
  }
  return false;
}

function isLowerCase(string) {
  return string === string.toLowerCase();
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
