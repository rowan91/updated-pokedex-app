export const shuffle = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * arr.length);
    swap(arr, i, j);
  }

  return arr;
};
function swap(arr, i, j) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
