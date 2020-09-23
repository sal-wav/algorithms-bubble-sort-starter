function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort

function bubbleSort(array) {
  // n := length(array)
  let n = array.length;
  // repeat
  let swapped = true;
  //swapped = false
  while (swapped) {
    swapped = false;

    for (let i = 1; i <= n - 1; i++) {
  //  for i := 1 to n - 1 inclusive do
      if (array[i-1] > array[i]) {
        swap(array, i-1, i);
        swapped = true;
      }
    }
}
  return array;
  //     /* if this pair is out of order */
  //     if A[i - 1] > A[i] then
  //
  //       /* swap them and remember something changed */
  //       swap(A[i - 1], A[i])
  //       swapped := true
  // if (swapped = false) {
  //   break;
  //   return array;
  // }
  //     end if
  //   end for
  // until not swapped
}


module.exports = {
  bubbleSort,
  swap
};
