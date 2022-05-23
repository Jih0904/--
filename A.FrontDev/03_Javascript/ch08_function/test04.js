// Scope(유효 범위)
// 변수와 매개변수가 어디까지 유효한지를 나타냄
// 함수 안에서 선언된 변수는 함수 블록 안에서만 접근이 가능
// 전역에서 선언한 변수들은 코드 어디에서든 접근이 가능
// JS는 기본적으로 전역과 함수 단위로 스코프 생성

let a = 10;

function print() {
    let b = 20;
    console.log(b);
}
print();

console.log(a);
// console.log(b);  // 전역이 아니라  b is not defined

