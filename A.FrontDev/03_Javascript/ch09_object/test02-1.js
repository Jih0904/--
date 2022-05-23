// 객체 리터럴과 this 키워드
let user = {
    name: "arnie",
    age: 30,
    details: {
        hobby: 'swimming',
        major: 'law',
        getHobby: function() {
            return this.hobby;
        }
    }
};

console.log(user.details.getHobby());