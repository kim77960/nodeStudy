'use strict';
const animal = {
  dog: 1,
  cat: 2,
  rabbit: 3,
};
const animalChecker = () => (1 ? true : false);
console.log(animalChecker());
const { dog, cat, rabbit } = animal;
console.log(dog);
