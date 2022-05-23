// 객체 리터럴 
let user = {
    name: "George  Mackay",
    age: 30,

    getData: function() { // 객체에 메소드 선언
        return 1 + 2;
    }
};

console.log(typeof user); // object

// 객체 프로퍼티 값 가져오기 

console.log(user.name);
console.log(user.age);
console.log(user.getData());

// 빈 객체 선언 후, 프로퍼티와 메소드 추가 가능 객체는 중괄호
let emptyObj = {};

emptyObj.name = "Arnie";
emptyObj.age = "30";
emptyObj.getData = function() {
    return 1 + 2;
}
console.log(emptyObj.name, emptyObj.age, emptyObj.getData())