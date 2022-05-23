// 객체와 for문

const user = {
    name: 'George',
    age: 30,
    hobby: 'surfing',
    getMessage: function() {
        return 'FuXXing ILY♡';
    }
};

console.log(user);
console.log(Object.entries(user));
console.log(Object.keys(user));
console.log(Object.values(user));

//표준 내장 객체
// 전역 스코프 안에 있는 객체들 참조

for (let property in user) {
    console.log(property);
}

for (let property in user) {
    console.log(user[property]);
}