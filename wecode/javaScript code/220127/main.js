//14번 함수 - 여러 인자
/*meetAt(2022); // 결과 --> "2022년"14
  meetAt(2032, 3); // 결과 --> "2032년 3월"
  meetAt(1987, 10, 28); // 결과 --> "1987/10/28"*/

  function meetAt(year, month, date) {

    if (year && !month && !date) {
      return year+'년'
    }
    if (year && month && date) {
      return year+'/'+month+'/'+date
    }
    if (year && month && !date) {
      return year+'년 '+month+'월'
    }
  }
  
  console.log(meetAt());

//15번 함수
function consoleSuccess(month, name) {   
  console.log(month, name); 
}  

let result = consoleSuccess("3", "김개발"); // 함수를 호출한 결과를 result에 담아서
console.log("consoleSuccess 호출 값은" + result); // 어떤 값이 리턴 되는지 직접 확인해보세요

//15번
//예시 1
function consoleSuccess(month, name) {   
  console.log(month, name); 
}  

let result = consoleSuccess("3", "김개발"); // 함수를 호출한 결과를 result에 담아서
console.log("consoleSuccess 호출 값은" + result); // output == consoleSuccess 호출 값은undefined
// return이 없는 function도 위의 코드에서 보는 것과 같이 
// return을 생략하면 함수는 undefined를 반환함

//예시 2
function getTax(price) { 
  return price * 0.1; //3500 * 0.1 == 350
}

function calculateTotal(price) {
  return price + getTax(price); // 3500 + 350 == 3850
}

const results = calculateTotal(3500); 
console.log(results); //output == 3850

// assignment
// 문제: getTotal 함수에서 인자로 받은 가격으로 각각 calculateTotal()를 호출!
//      그리고 그 결과값을 반환할 것

function getTax(price) { // 가격의 tax를 구하는 함수
  return price * 0.1;
}

function calculateTotal(price) { // 상품의 가격에 tax를 더한 값을 구하는 함수
  return price + getTax(price);
}

function getTotal(price1, price2) { // 두 상품의 가격을 더해서 반환하는 함수
  return calculateTotal(price1) + calculateTotal(price2);
}

console.log(getTotal(1000, 2000)); //output == 3300

//15번 문제
//assignment 1
//arr변수에 접근하여 getElement()가 'array'라는 문자열을 return 하도록!

function getElement() {
  let arr = [3, [4, ["array", 9], 2+3], [0]];
  console.log(arr[1][1][0]); // output == array
  // return arr[1][1][0]
}
console.log(getElement());

// assignment 2
// addFirstAndLast 함수에 주어진 myArray의 첫번째 element와 마지막 element의 값을 리턴!
// 만일 myArray에 한 개의 요소만 있다면 해당 요소의 값을 리턴, 요소가 없는 빈 array라면 0을 리턴!
let myArray = [3, 2, 5];
function addFirstAndLast(myArray) { //myArray는 숫자값으로만
  if(myArray.length === 1) {
    return myArray[0];
  } else if(myArray.length === 0) {
    return 0;
  } else {
    return myArray[0] + myArray[myArray.length-1];
  }
}
console.log(addFirstAndLast(myArray));


