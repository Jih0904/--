function sum(x, y) {
    console.log(x + y);
}
sum(1, 3);
sum(4, 12); // 재활용 

function sum2(a, b) {
    console.log(a);
    return a + b;  // return에서 함수가 종료 됨 그래서 그 이하의 코드는 적용ㄴㄴ 
    console.log(a); // 그래서 실행 안됨.

}
sum2(1, 3);

function sum3(c, d) {
    if (c < 2) {
        return 
    }
    return c + d;
}
console.log(sum3(1, 3)); undefined // return 뒤에 값이 없어서 
console.log(sum3(5, 3)); //8 