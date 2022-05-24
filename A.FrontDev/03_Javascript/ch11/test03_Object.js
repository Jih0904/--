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

const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);
console.log(target === returnedTarget);

const a = { k: 123 }
const b = { K: 123 }
console.log(a === b); // false
