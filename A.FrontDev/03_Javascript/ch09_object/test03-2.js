// 생성자 함수, 첫글자 대문자로
function User(first,last) {
    this.firstName = first
    this.lastName = last
}
// 생성자 함수가 할당된 인스턴스들
// {}없이 (리터럴 방식 대신에) 손쉽게 객체 데이터 생성

const George = new User('George', 'Mackay');
const Timothee = new User('Timothee', 'Chalamet');
const Lizy = new User('Lizy', 'Olsen');

console.log(George);
console.log(Timothee);
console.log(Lizy);

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

console.log(George.getFullName()); // 함수니까 괄호 까먹지말어라~!!
console.log(Timothee);
console.log(Lizy.getFullName());