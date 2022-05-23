// 전역변수와 지역변수 
// 동일한 이름을 가진 전역 변수와 지역변수가 있으면, 함수 안에서는 지역변수를 우선해 사용

let name = 'Timothee';

function getName() {
    let name = 'George'
    console.log(name); // george
}
getName();
console.log(name); // Timothee
