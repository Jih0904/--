// 이벤트 등록하기
let btn = document.querySelector("#myBtn")
// let s = document.querySelector('#myBtn')

// // 방법1 - onclick 프로퍼티
// btn.onclick = function () {
//     console.log('Hi onclick2!!');
// }

// 방법2 
function event1() {
    console.log('Hi event1');
}
function event2() {
    console.log('Hi event2');
}

// btn.onclick = function ()  {
//     event1();
//     event2();
// }

// 방법3 - addEventListener() 메소드 
// 첫번째 파라미터: 이벤트 타입을 문자열로 전달
// 두번째 파라미터: 이벤트 핸들러 전달
// addEventListener(event, handler)
// btn.addEventListener('click', event1);
// btn.addEventListener('click', event2);

// btn.addEventListener('click', function(){
//     console.log('event3');
// })
// btn.addEventListener('click', function(){
//     console.log('event4');
// })