let numbers = [30, 2, 56, 92, 8];
console.log("unsorted array:", numbers);
function sortArray(sort) {
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let x = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = x;
      }
    }
  }
  return numbers;
}
console.log("sorted array:", sortArray(numbers));
