//Recursive function that returns an array of first n numbers in fibonacci sequence
function fibsRec(n) {
  if (n < 1) return "Invalid input - please enter a number greater than 1";
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

// Function that returns an array of first n numbers in fibonacci sequence, using loops
function fibs(n) {
  let start = 0;
  if (n < 1) return "Invalid number- please enter a number greater than 1";
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}
