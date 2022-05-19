// 데이터 타입
// 1. 기본 타입(Primitive Data Type)
//값이 변수에 할당될 떄 메모리 상에 고정된 크기로 저장
// 해당 변수가 직접 값을 보관

let x = 5;              // 숫자형(Numbber)
let y = 3.14;           // 숫자형(Numbber)
let z = 'five';         // 문자형(String)
let isTrue = true;      // 불린형(Boolean)
let empty = null;       // null 빈값
let nothing;            // undefined 존재하지 않는 값
let sym = Symbol('me'); //심볼형(Symbol)

// 2. 참조 타임 (Reference Data Type)
// 변수에 고정된 크기를 저장하기 않고, 값의 메모리 주소를 참조 

let item = { // 객체 (object)
    price: 500,
    name: 'assam',
    count: 10
}
let fruits = ['apple', 'orange', 'kiwi']; // 배열 (array)
let addFruit = function (fruit) {
    fruits.push(fruit);
}
addFruit('waermelon');
console.log(fruits); 