let user = {
    age: 30,
    name: 'george',

    get get_age() {         // 정보 은닉 어쩌고를 위해... 걍 user.@@로 접근을 안하고 get set을 사용함 ㅇㅅㅇa,,
        return this.age;   //this = user 
    },
    set set_age(age) {    // age를 입력하겠따. this는 객체 자기 자신ㅇ를의미........
        this.age = age;   
    }
}
console.log(user.get_age);  //  함수 아니라 뒤에 괄호 없
user.set_age = 30;  // function이 아니므로 괄호 없 없
console.log(user.get_age);
