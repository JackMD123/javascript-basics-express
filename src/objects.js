const createPerson = (name, age) => {
  const person = { name, age };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return object.property;
  }
  return false;
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true;
  }
  return false;
};
const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  const newArray = [];
  for (let i = 0; i < people.length; i++) {
    newArray.push(people[i].age);
  }
  return newArray;
};

const findByName = (name, people) => {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
};

const findHondas = cars => {
  const objs = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].manufacturer === 'Honda') {
      objs.push(cars[i]);
    }
  }
  return objs;
};

const averageAge = people => {
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    sum = sum + people[i].age;
  }
  let average = sum / people.length;
  return average;
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
