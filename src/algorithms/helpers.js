export function swap(array, i, j) {
  let c = array[i];
  array[i] = array[j];
  array[j] = c;
  return array;
}

export const getMaxDigits = (array) => {
  let maxDigits = 0;
  for (let i = 0; i < array.length; i++) {
    const numDigits = Math.floor(Math.log10(Math.abs(array[i]))) + 1;
    if (numDigits > maxDigits) {
      maxDigits = numDigits;
    }
  }
  return maxDigits;
};
