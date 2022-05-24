class User {
    
    constructor(first, last) { // 내부 함수, 생성자 함수 동일
        this.firstName = first
        this.lastName = last
    }
    getFullName () { // 별도로 프로토타입 안 만들어줘도 됨.
        return `${this.firstName} ${this.lastName}`
    }
}

const angel = new User('Angel', 'k')
const amy = new User('Amy', 'h')
const leo = new User('Leo', 's')

console.log(angel);
console.log(angel.firstName);
console.log(angel.lastName);
console.log(angel.getFullName());

