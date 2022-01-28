// 17. 배열 조작하기
// 17-1 요소추가

let cities = [];

cities[0] = "서울";
cities[1] = "대전"; 
cities[2] = "대구";

cities[5] = "제주도";

console.log(cities); //output == ['서울', '대전', '대구', empty × 2, '제주도']

//17-2 push/ unshift 메소드
let cities2 = [];           //cities2라는 변수에 []을 할당하는 순간, cites2라는 변수는 array형이 됨!
cities2.push("경주", "전주"); //그래서 이렇게 push라는 메소드를 사용할 수 있는 것!
cities2.unshift("인천");

console.log(cities2); //output == ['인천', '경주', '전주']

//17-3 pop메소드
cities2.pop();
console.log(cities2); //output == ['인천', '경주']

//assignment
//divideArrayInHalf는 array를 argument로 받음 -> 이 array는 숫자 값으로만 구성!(총 5개의 element를 가짐)
//조건1: array 요소들 중 10과 같거나 작은 값의 요소들은 result의 맨앞으로
//조건2: 10보다 큰 값의 요소들은 result의 맨 뒤로 재구성성 된 array를 리턴해야함!

let array = [1, 20, 10, 5, 100]; //[1, 10, 5, 100, 20]로 return해야함
function divideArrayInHalf(array) {
  array.reverse();
  let result = [];
  array.filter(x => {
    if(x == 10 || x < 10) {
      result.unshift(x);
    } else if(x > 10) {
      result.push(x);
    }
  })    

  return result;
  // let result = [];
  
}

console.log(divideArrayInHalf(array));