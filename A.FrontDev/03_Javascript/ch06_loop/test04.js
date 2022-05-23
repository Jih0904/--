// continue문 
// 1부터 10까지 수 중에 3으로 나눈 나머지가 1인 수만 더하기 
// 1 4 7 10
// 합 22 

let sum = 0; // 0 초기화
for (let i=1; i<=10; i++) {
    if (i%3 != 1){
        continue; 
    }
     console.log(i);
     sum += i; // sum = sum + i;

}
console.log("합은 " + sum);


/**
 * t:   2 3   5 6   8 9
 * f: 1     4     7
 * 
 */