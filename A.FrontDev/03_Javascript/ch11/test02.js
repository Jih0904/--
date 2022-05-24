const pi = 3.141592
console.log(pi);

const str = pi.toFixed(2);
console.log(str); //3.14 
console.log(typeof str); // string

// 숫자와 관련된 대표적인 전역함수 2개
const integer = parseInt(str) // 정수로 반환
console.log(integer);

const float = parseFloat(str);
console.log(float);
console.log(typeof float); // number