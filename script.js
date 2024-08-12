//defining an array which includes unsorted numbers.
let numbers = [30, 2, 56, 92, 8];
//printing the mentioned array into console.
console.log("unsorted array:", numbers);
//making a function that sorts the array when it's mentioned.
function sortArray(sort) {
    //making a loop which at first compares the index 1 and 0 of the array. and then the index 2 and 1 until it reaches the last index which means i-1.
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let x = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = x;
      }
    }
  }
  //at the end returning the sorted array.
  return numbers;
}
//testing the loop.
console.log("sorted array:", sortArray(numbers));
