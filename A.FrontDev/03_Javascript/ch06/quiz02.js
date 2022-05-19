// 입력된 수가 1일 될 때까지 
// 홀수는 3배 + 1,
// 짝수는 2로 나누세요.

let num = 122;

// while(조건식: 1이 될 때까지) {
//     if(조건식) {
//         // 홀수일 때 num*3 + 1
//     } else {
//         // 짝수일때 num /= 2
//     }
//     console.log(num);
// }


// while(num == 1) {
//     if(num % 2 == 0) {
//         num * 3 + 1;
//     } else {
//         num /= 2;
//     }
//     console.log(num);
// }

// 답 
while(num != 1) { //1이 아닐때 조건실행함 내가 한 num == 1은 num이 1일때 조건을 실행하라는 말임
    if(num%2 == 1) {
       num = num * 3 + 1;  // =을 붙여주자 아님 ++ 이나 /= 이런애들은 없어도 되는디
    } else {
      num /= 2; // num = num / 2
    }
    console.log(num);
}
