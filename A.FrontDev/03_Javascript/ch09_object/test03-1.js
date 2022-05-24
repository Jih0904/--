// JS 객체 생성 방법 
// 1) 객체 리터럴 방식 ({}) 2) new Object()로 생성하는 방식
// 3) 생성자 함수로 생성하는 방식 4) ES6 class기반 객체 생성 방식

// 1,4 권장 

// 생성자 함수(prototype)

const George = {
    firstName: 'George',
    lastName: 'Mackay',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
} 
console.log(George);
console.log(George.getFullName());

const Timothee = {
    firstName: 'Timothee',
    lastName: 'Chalmet',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
} 

console.log(Timothee);
console.log(Timothee.getFullName());

const Lizy = {
    firstName: 'Lizy',
    lastName: 'Olsen',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
} 

console.log(Lizy);
console.log(Lizy.getFullName());