// 리포트 점수에 따라 등급을 매기는 프로그램을 만드세요.
/**
 * A : 90-100
 * B : 80-89
 * C : 70-79
 * D : 60-69
 * F :less than 59
 * 
 * console.log(grade); 
 */

// let grade = 60

// if (grade>=90) {
//     console.log("A"); 
// } else if(grade<=89) {
//     console.log("B");
// } else if(grade<=79) {
//     console.log("C");
// } else if(grade<=79) {
//     console.log("D");
// } else {
//     console.log(F);
// }
 // 답

 let score = -80;
 let grade = ""
 
 if(90<=score && score<=100) {
    grade = "A"
 } else if(80<=score && score<=89) {
    grade = "B"
 }else if(70<=score && score<=79) {
    grade = "C"
 }else if(60<=score && score<=69) {
    grade = "D"
 }else if(0<=score && score<=59) {
    grade = "F"
 } else {
     console.log("잘못된 범위의 점수입니다")
 }

 console.log(grade);
