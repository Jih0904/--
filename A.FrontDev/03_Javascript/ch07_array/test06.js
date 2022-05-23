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

