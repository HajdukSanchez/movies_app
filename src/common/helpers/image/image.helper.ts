/**
 * Helper to get the oimage URL using the movie Path
 *
 * @param {string} imagePath Path of the image to create the URL
 * @return {*} URL of the image to render
 */
export const getImageURI = (imagePath: string) => {
  return `https://image.tmdb.org/t/p/w500${imagePath}`;
};
