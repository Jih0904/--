// JS 배열 읽기 (CRUD 중 R, Reded)
const data = [1, 2, 3]
console.log(data[0],data[1], data[data.length - 1]);

// JS 배열 수정 (CRUD 중 U, Update)
const data2 = [1, 2, 3];
data2[1] = 'coding';
console.log(data2);

// JS 배열 수정 (CRUD 중 D, Delete)
// 배열변수 .splice(시작번호, 삭제 개수)
// splice() - 배열 객체의 메소드 

const data3 = [1, 2, 3, 'Timothee', 'George'];
data3.splice(1, 3)
console.log(data3);
