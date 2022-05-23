// 아래와 같이 meetAt 함수를 만들어주세요.
/*
매개변수를 3개를 넣을 수 있습니다.
첫번째 인자: 년도에 해당하는 숫자
두번째 인자: 월에 해당하는 숫자
세번째 인자: 일에 해당하는 숫자


결과 예시
meetAt(2022);   //2022년
meetAt(2022, 5);   //2022년 5월 
meetAt(2022, 5,20);   //2022/5/20 

*/

// function meetAt(x, y, z) {
//     console.log(x ,"/",y ,"/",z ,"/")
// }
// console.log(meetAt(2022, 5, 20));

//답
function meetAt(year, month, date) {
    let todayYear = year;
    let todayMonth = month;
    let todayDate = date;

    if(todayDate) {
        return `${todayYear}/${todayMonth}/${todayDate}`;
    }
    if (todayMonth) { 
        return `${todayYear}년 ${todayMonth}월`;

    }
    if (todayYear) { 
        return `${todayYear}년 `;

    }


    // return `${todayYear}/${todayMonth}/${todayDate}`;
}

console.log(meetAt(2022, 5, 20));
console.log(meetAt(2022));
console.log(meetAt(2022, 5));
