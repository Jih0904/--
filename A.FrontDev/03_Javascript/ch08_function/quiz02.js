// "안녕하세요." 라는 문장을 출력하는 함수 greet 을 만드세요.

// function greet(안녕하세요) {
//     console.log(greet);
// }

// 답

function greet() {
    console.log("안녕하세요.")
}

// 매개변수(parameter)를 전달받아 다양한 이름을 출력할 수 있는 함수 greet을 만드세요.
// 예) 안녕 내 이름은 @@(이)야



function greet(name) {
    console.log("안녕 내 이름은" + name + "(이)야.")
}
greet();
console.log(greet)

// 답 
let name = "George"
function greet(name) {
    console.log("안녕 내 이름은", name  ,"(이)야.");
}
greet();
// 매개변수로 전달받은 이름을 반환하게 하는 함수로 수정하세요.
얘도 수정
