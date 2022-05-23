// 객체 안에 객체 생성도 가능

let user = {
    name: "Rose",
    age: 20,
    details: {
        hobby: 'coding',
        major: 'security',
        getName: function(name) {
            return name;
        }
    },
    getData: function() {
        return "사용자";
    }
}

console.log(user.name, user.age, user.getData());
console.log(user.details.hobby, user.details.getName("George"))