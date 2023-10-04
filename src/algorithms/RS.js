import { getMaxDigits } from './helpers';

const countingSort = (array, exp) => {
  const output = new Array(array.length);
  const count = new Array(10).fill(0);

  for (let i = 0; i < array.length; i++) {
    const digit = Math.floor(array[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const digit = Math.floor(array[i] / exp) % 10;
    output[count[digit] - 1] = array[i];
    count[digit]--;
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }
};

const radixSort = (array, arraySteps, colorSteps) => {
  const maxDigits = getMaxDigits(array);

  for (let exp = 1; Math.floor(maxDigits / exp) > 0; exp *= 10) {
    countingSort(array, exp);
    arraySteps.push(array.slice());
  }

  const colorKey = new Array(array.length).fill(2);
  colorSteps.push(colorKey.slice());
};

export default radixSort;