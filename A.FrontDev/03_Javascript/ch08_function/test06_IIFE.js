// 즉시 실행 함수 (IIFE Immidiately_Invoke_Function Expression)

const a = 7;
function double() {
    console.log(a * 2);
}
double();  // JS엔진이 즉시실행함수가 실행되는 부분과 double()이 실행되는 부분을 명확히 구분 못해 error 발생

// function () { // 이름이 없는 익명함수이므로 그냥 쓸 수 x
//     console.log(a * 2);
// }

// 즉시 실행 함수 
// 따로 함수의 이름을 짓지 않아도 소괄호 2개를 사용해서 
(function () {
    console.log(a * 2);
})(); // 밖에 소괄호

(function () {
    console.log(a * 2);
}()); // 안에 소괄호 // 이 방법을 더 권장
