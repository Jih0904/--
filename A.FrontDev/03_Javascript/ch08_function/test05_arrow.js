// 화살표 함수
// () => {}  vs. function () {}

const double = function (x) { // 익명 함수 할당 ( 함수표현식)
    return x * 2;
}

console.log('double:', double(7));

const doubleArrow = (x) => { //화살표 함수
    return x * 2;
}
console.log('doubleArrow', doubleArrow(7));


const doubleArrow2 = (x) =>  x * 2; // 실행문이 1개일 때 return 생략
console.log('doubleArrow2', doubleArrow2(7));


const doubleArrow3 = x =>  x * 2; // 매개변수가 1개일 때 () 생략
console.log('doubleArrow3', doubleArrow3(7));


const arrowFunc = x => 1234; // null, 배열 객체 다 올 수 있음
console.log('arrowFunc', arrowFunc(1));

const arrowFunc2 = x => ({ name: 'George'}) 
console.log('arrowFunc2', arrowFunc2(1));

