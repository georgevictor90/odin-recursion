//mergeSort algorithm

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let half = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0, half);
  let secondHalf = arr.slice(half);
  firstHalf = mergeSort(firstHalf);
  secondHalf = mergeSort(secondHalf);
  return merge(firstHalf, secondHalf);
}

//Function for merging two sorted arrays
function merge(first, second) {
  let sorted = [];
  while (first.length > 0 && second.length > 0) {
    if (first[0] <= second[0]) {
      sorted.push(first[0]);
      first.shift();
    } else {
      sorted.push(second[0]);
      second.shift();
    }
  }
  while (
    // By now, either first or second array is empty. It remains to empty the other input list.
    first.length > 0
  ) {
    sorted.push(first[0]);
    first.shift();
  }
  while (second.length > 0) {
    sorted.push(second[0]);
    second.shift();
  }
  return sorted;
}
