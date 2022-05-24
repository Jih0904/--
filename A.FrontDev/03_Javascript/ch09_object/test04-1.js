// ES6 Classes 준비 머라는거야 시발.. 
// 객체 리터럴 방식

const amy = {
    name: 'Amy',
    age: 20,

    method: function() {
        console.log(this.name);
    },
    normal() {
        console.log(this.name);
    }
}