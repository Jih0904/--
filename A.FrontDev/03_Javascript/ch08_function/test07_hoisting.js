// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상


// 1) 함수 표현식을 사용할 땐 double()이 먼저 실행되는 건 불가능
// const a = 7;
// double();  // ERROR 


// const double = function () {
//     console.log(a * 2);
// }


// 2) 함수 표현식 부분을 함수 선언식으로 바꾸면 호이스팅이 발생해서 실행가능해짐.
// 즉 함수선언은 밑에다가 작성해도 위에서 함수 실행이 가능함.
const a = 7;
double(); // 14

function double() {
    console.log(a * 2);
}