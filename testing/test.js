const address = "경기도 성남시 분당구 중앙공원로 53";
//함수를 return시 "경기도 분당구 중앙공원로 53"을 반환받아야함


function sliceCityFromAddress(address) {
  return address.split(" ").filter(x => x[2] == '시' ? false : true).join(' ')
    //output == ['경기도', '성남시', '분당구', '중앙공원로', '53']
    //console.log(x[2]); //output == 도, 시, 구, 공
    //output == ['경기도', '분당구', '중앙공원로', '53']
    //output == 경기도 분당구 중앙공원로 53

    // if(x[2] == '시') {
    //   return false
    // }
    // return true
}

console.log(sliceCityFromAddress(address));