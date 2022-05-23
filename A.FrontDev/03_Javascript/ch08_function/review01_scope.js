// 변수 유효범위
// var, let, const
// let, const는 그 변수가 선언되어 있는 블록 내부가 유효범위가 됨

function scope() {
    if (true) {
        const a =123;
        console.log(a);
    }
}
scope();

//var 블록 레벨이 아닌 함수 범위의 유효 레벨을 가짐

function scopeVar() {
    if (true) {
        var a =123;
    }
    console.log(a);
}
scopeVar();
