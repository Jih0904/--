// 조건문을 이용한 사칙연산 함수를 만드세요.


// function calc(x, y, z) { 
//     if( z="+") {
//         x+y;
//     } else if (z="-") {
//         minus
//     } else if (z="*") {
//         mulip
//     } else if (z="/") {
//         div
//     }
// }

// let plus = calc(5, 5, "+");
// console.log(plus); 

// let minus = calc(5, 5, "-");
// console.log(minus); 

// let mulip = calc(5, 5, "*");
// console.log(mulip); 

// let div = calc(5, 5, "/");
// console.log(div); 

// 답

function calc(x1, x2, op) { 
    if ( op =="+") {
       return x1 + x2;
    } else if (op == "-") {
        return x1 - x2;
    } else if (op == "*") {
        return x1 * x2;
    } else if (op == "/") {
        return x1 / x2;
    }
}

let plus = calc(5, 5, "+");
console.log(plus); 

let minus = calc(5, 5, "-");
console.log(minus); 

let mulip = calc(5, 5, "*");
console.log(mulip); 

let div = calc(5, 5, "/");
console.log(div); 