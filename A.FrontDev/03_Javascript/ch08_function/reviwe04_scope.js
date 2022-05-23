// var 키워드와 함수 scope
// var 함수 scope를 가짐 
// 함수 안에서 var 키워드로 선언된 변수(지역 변수)는 함수 외부에서는 유효하지않지만,
// 블록 안에서 var 키워드로 선언된 변수는 블록 외부에서도 유효함 (함수 scope)

var data = 1;

function func() {
    var item = 2;
    console.log(data);
}
func();
// console.log(item); //error 

{
    var item2 = 3;
}
console.log(item2); // 3 

var a = 10;
console.log(a);  // 10

function print() {
    var b = 20;
    if(true) {
        var c = 30;
    }
    console.log(c); // 30
}
print();
console.log(b);  // error