// if문 for문 블록 
const item1 = 1;
if (item1 === 1) {
    let item2 = 2;
    console.log(item2);
}

//console.log(item2); // error


// 함수 안의 let, const도 마찬가지
function getData() {
    let data = 1;
}
// console.log(data) //error

// 함수도 마찬가지
{
    function getData() {
        let data = 1;
    }
}
console.log(getData()); // undefined