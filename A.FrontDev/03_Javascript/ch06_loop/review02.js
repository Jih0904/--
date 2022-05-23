// 배열과 for문
// length 사용: 배열의 길이만큼 반복

const data = ['george', 30, true];

for(let i=0; i<data.length; i++) {
    console.log(typeof data[i]); // data[0] data[1]
}

// for .... of 문
const data2 = ['george', 30, true];

for(let item of data2) {
    console.log(item); 
}