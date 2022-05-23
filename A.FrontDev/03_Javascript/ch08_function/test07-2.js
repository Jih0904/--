// 호이스팅 
// 1) var 키워드 
console.log(a); //undefined 얘도 가넝 
a = 10;
console.log(a); // 10
var a = 20;
console.log(a); // 20

// console.log(b);  // ERROR
// b = 10;
// console.log(b); 
// let b = 20;
// console.log(b); 


// 2) 함수의 경우도 동일 
getData(); 
function getData() { // 함수 선언일때 위 아래 다 가넝. 호이스팅 가넝
    console.log("lLY GM");
}

// getData2(); // ERROR
// let getData2 = function () { // ㅣ익명함수 함수표현식
//     console.log("lLY Gogo");
// }
// getData2();

// 해결방안
// 1) 변수 선언, var 키워드 대신에, let과 const 사용
// 2) 함수 선언, 함수 표현식 사용
