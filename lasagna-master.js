/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

// Task 1
export const cookingStatus = (remainingTime) => {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  }
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }
  return 'Not done, please wait.';
};

// Task 2
export const preparationTime = (layers, timePerLayer = 2) => {
  return layers.length * timePerLayer;
};

// Task 3
export const quantities = (layers) => {
  const res = { noodles: 0, sauce: 0 };
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'sauce') res.sauce += 0.2;
    else if (layers[i] === 'noodles') res.noodles += 50;
  }
  return res;
};

// Task 4
export const addSecretIngredient = (friendList, myList) => {
  const [specialIngredient] = friendList.slice(-1);
  const lastIdx = myList.length;
  myList.splice(lastIdx, 0, specialIngredient);
};

// Task 5
export const scaleRecipe = (recipe, numberOfPortions) => {
  const scaleRatio = numberOfPortions / 2;
  const newRecipe = {};
  for (const item in recipe) {
    newRecipe[item] = recipe[item] * scaleRatio;
  }
  return newRecipe;
};
