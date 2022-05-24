// new Object() 객체 생성 
// 빈 객체 생성
// let person = {}; //객체 리터럴
let person = new Object();

// 멤버 설정
person.firstName = "George"
person.lastName = "Mackay"
person.age = 30;
person.getFullName = function () { // 함수 표현식 (익명 함수)
    return this.firstName + " " + this.lastName;
};

console.log(person.getFullName());