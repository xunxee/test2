// 16번 for 문의 활용
// assignment
// findSmallestElement의 arr인자는 숫자 값으로만 이루어진 배열!
// arr의 값들 중 가장 작은 값을 return!
// 만일 arr가 비어있다면 0을 return!

let arr = [20, 200, 23, 1, 3, 9]; //1이 리턴되어야함!

function findSmallestElement(arr) {
  // your code here
  if(arr.length === 0) {
    return 0;
  } else {
    return arr.sort((a, b) => a - b)[0]
  }
}

console.log(findSmallestElement(arr));

//let arr = [20, 200, 23, 1, 3, 9]; //1이 리턴되어야함!
function a(arr) {
  let first = arr[0];
  // console.log(first);
  for(let i = 1; i < arr.length; i++) { //i == 0
    if(arr.length === 0) {
      return 1;
    } else if(arr.length > 0) {
    if(first > arr[i]) {
      first = arr[i]
    }
  }
  return first;
  }
}

console.log(a(arr));