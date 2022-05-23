// 전역 scope
let data = 1;

function getData() {
    let item = 2;
}





// 블록 scope - let, const
{
    let data2 = 1;
}
// console.log(data2); // ERROR

// 블록 밖에서 let과 const로 선언된 변수는 블록 안에서도 유효함
let name = 'George';
{
    console.log(name);
}
console.log(name);
{
    let item1 = 1;
    (
        let item2 = 2;
        console.log(item1);
    )
    // console.log(item2); // ERROR 
}
// console.log(item1); // ERROR 