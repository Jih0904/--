// 삼항 연산자 
// if와 switch처럼 조건문을 처리하는 연산자 
// 조건문 ? 표현문1 : 표현문2

let condition = 5 > 10; //false
condition ? console.log('Left') : console.log('Right')

let age = 18;
let isAdult = (age >= 18) ? true : false;
console.log(isAdult);

// 조건1 ? 값1 : (조건2 ? 값2 ; 값3);
// score가 90 이상이면 A, 80 이상이면 B, 80보다 작으면 C
let score = 70;
let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : "C";
console.log(grade);