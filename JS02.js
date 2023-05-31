function timGiaTriLonNhat(arr) {
  let max = arr[0]; // Gán max ban đầu là phần tử đầu tiên trong mảng

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
console.log(timGiaTriLonNhat([7, 2, 8, 6, 4])); // Output: 8
console.log(timGiaTriLonNhat([20, 19, 10, 15, 7])); // Output: 20
console.log(timGiaTriLonNhat([-9, 4, -1, -2, -5])); // Output: 4
