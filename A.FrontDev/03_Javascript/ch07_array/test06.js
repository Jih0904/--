// 다양한 배열 관련 기능(함수)
// push 배열의 끝에 아이템 추가

const data = [1, 2, 3];
data.push('George');
console.log(data);

// pop 배열 끝에 있는 아이템을 리턴해주고, 해당 아이템을 배열에서 삭제

const data2 = [1, 2, 3];
console.log(data2.pop()); //3
console.log(data2); // [1, 2]

// shift 배열의 첫 번째 아이템을 삭제하고, 뒤에있는 아이템을 앞으로 당김

const data3 = [1, 2, 3];
data3.shift();
console.log(data3);

//concat  두 배열 합치기
const a1 = [1, 2];
const a2 = ['timothee', 3];
const a3 = a1.concat(a2);
console.log(a3);

// reverse 배열을 역순으로 배치 
const r1 = [1, 2, 3, 4, 5, 6];
r1.reverse();
console.log(r1);

//join 아이템 사이에 특정 문자열을 넣어서, 모든 아이템을 합쳐서, 하나의 문자열로 만들어줌

const j1 = [1, 2, 3, 4, 5, 6];
let j2 = j1.join('*');
console.log(j2, typeof j2);

//slice 배열의 일부분 반환
// slice(a, b) (시작점, b-1인덱스)
const s1 = [1, 2, 3, 4, 5, 6];
let s2 = s1.slice(1, 3); // [2, 3]
console.log(s2);

// forEach 
//for문을 대체해서, 간단히 배열의 각 아이템을 가져올 수 있는 함수
const f1 = [1, 2, 3, 4, 5, 6];
f1.forEach(item => {
    console.log(item);
});

// 반복문에서 각각의 아이템을 받을 변수(item)를 선언하고,
// 화살표 함수에서 각각의 아이템을 가지고 처리할 코드를 써줌.

//map 배열의 각 아이템에 정의한 함수를 적용해서, 새로운 배열을 리턴하는 함수
// 일괄적으로 아이템에 함수를 적용해 값을 변경할 때 사용

const m1 = [1, 2, 3, 4, 5, 6];
const m2 = m1.map(item => item * 2);
console.log(m2);

// indexOf 배열에서 지정한 아이템이 위치한 인덱스 번호를 리턴
const i1 = [1, 2, 'George', 6];
console.log(i1.indexOf('George')); // 2

// findIndex
// 배열의 아이템이 객체일 경우, 해당 객체에서 저장한 데이터 위치를 찾을 수 있는 방법 (인덱스 번호 리턴)

const myArray = [
    { 
        id: 1,
         name: 'George Mackay'
    },
    {
        id: 2, 
        name: 'Timothee Chalamet'
    }
];
console.log(myArray.indexOf('Timothee Chalamet')); // -1
console.log(myArray.findIndex(item => {
    return item.name === 'Timothee Chalamet'
})); 
console.log(myArray.findIndex(item => item.name === 'Timothee Chalamet'));

//find 
// findIndex와 유사하지만, 지정한 데이터 위치를 리턴하는 것이 아니라, 지정한 데이터가 들어 있는 객체를 리턴함.

const myArray2 = [
    { 
        id: 1,
         name: 'George Mackay'
    },
    {
        id: 2, 
        name: 'Timothee Chalamet'
    }
];

console.log(myArray.findIndex(item => item.name === 'Timothee Chalamet'));

// filter 
// 배열에서 특정 조건에 맞는 아이템만 추출할 때 사용하는 기능

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr.filter( i => i % 2 === 0);
console.log(even, typeof even);    
