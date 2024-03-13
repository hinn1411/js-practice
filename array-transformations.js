// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((item) => item * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.reduce((accumulator, currentElement) => {
    if (currentElement != 3) {
      accumulator.push(currentElement);
    } else {
      accumulator.push(3, 3, 3);
    }
    return accumulator;
  }, []);
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middleIndex = deck.length / 2 - 1;
  return deck.slice(middleIndex, middleIndex + 2);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const middleIndex = deck.length / 2;
  const lastIndex = deck.length - 1;
  const middleCards = [deck[lastIndex], deck[0]];
  return [
    ...deck.slice(1, middleIndex),
    ...middleCards,
    ...deck.slice(middleIndex, -1),
  ];
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((firstElement, secondElement) => {
    if (firstElement < secondElement) {
      return -1;
    } else if (firstElement > secondElement) {
      return 1;
    } else {
      return 0;
    }
  });
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  deck.reverse();
  return deck;
}
