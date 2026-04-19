export function calcRating(ratingsAverage) {
  const rating = Math.round(ratingsAverage);
  return Array.from({ length: rating });
}
