// 문자열 결합 연산자
console.log("바닐라" + " " + "JS")

let myString = "바닐라";
myString += "JS"; //myString = myString + "JS"
console.log(myString);

let s1 = "timothee" + 1227;
let s2 = 1227 + "timothee";
let s3 = 123 + "456";
let s4 = 123 + 456 + "abcd"; //579abcd
let s5 = "abcd" + 123 + 456;  //왜 순서따라 결과 다르지 abcd123456 -> 자바 기준이면 값 같은데 자바스크립트라 순서대로 계산 되서 이렇게 나옴

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
