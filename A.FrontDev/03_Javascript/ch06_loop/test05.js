let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];

console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);   //인덱스 

// for문 
// for(시작값; 최종값; 증감식) {여기 실행문이 계속 반복}

for(let i=0; i<5; i++) {
    console.log(brands[i]);
}


for(let i=0; i<brands.length; i++) {
    console.log(brands[i]);
}