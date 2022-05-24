// Object 객체
const target = {
    // key: value (속성: 값)
    name: 'george',
    age: 30
}
const source = {
    name: 'timothee',
    email: 'peach@gmail.com'
}

const returnedTarget = Object.assign({}, target, source);
console.log(target);
console.log(returnedTarget);
console.log(target === returnedTarget);