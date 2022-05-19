// if문 
// 짝/홀수 판별
// 입력한 점수가 홀수이면 3배한 값에 1을 더한다.
// 짝수이면 2로 나눠서 몪을 구한다.

// let num = 99;

// if (조건식) {
//     // true일 때, 실행문
// } else {
//      // false일 때, 실행문
// }

let num = 99;

if (num % 2 == 1) {
   num = num * 3 + 1;
} else {
    num = num / 2;
}


console.log("계산 결과:", num);