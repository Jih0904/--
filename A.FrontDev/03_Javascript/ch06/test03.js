// break문
let i = 0;
let sum = 0;

while (true) {
    sum += i;
    if(sum > 3000) {
        break; //빠져나오게 ㅎㅐ주는 넘.
    }
    i++;
    
}

console.log("0부터 " + i + "까지 더하면 3000을 넘음: " +sum);