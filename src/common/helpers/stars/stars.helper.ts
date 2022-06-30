/**
 * Data model for types of star to show
 *
 * @interface starsArrayProps
 */
interface starsArrayProps {
  index: number;
  type: 'star' | 'star-outline' | 'star-half';
}

/**
 * Function to set the array of stars to show depends on the rating
 *
 * @param {number} raiting Raiting of the movie
 * @param {number} maxAverage Maximum raiting for render stars
 * @return {*} Array of stars
 */
const setStarIconByRaiting = (raiting: number, maxAverage: number = 5): starsArrayProps[] => {
  const average: number = raiting / 2;
  const module: number = raiting % 2; // Value to add half star
  let moduleAdd: boolean = false; // Flag to add a half star

  const stars: starsArrayProps[] = [];

  for (let i = 1; i <= maxAverage; i++) {
    if (i <= average) {
      stars.push({ index: i, type: 'star' }); // Complete star
    } else {
      if (module > 0 && !moduleAdd) {
        stars.push({ index: i, type: 'star-half' }); // Half star
        moduleAdd = true; // No more half stars
      } else {
        stars.push({ index: i, type: 'star-outline' }); // Empty star
      }
    }
  }

  return stars;
};

export { setStarIconByRaiting };
