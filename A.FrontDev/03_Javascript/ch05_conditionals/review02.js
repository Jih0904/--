// random() 함수 만들기
// if문을 switch문으로 변경 

// const a = random();

// switch (a === 0) {
//     case "a는 0":
        
//         break;

//     default: 'a는 0이 아님'
//         break;
// }

// 답

function random() {
    return Math.floor(Math.random() * 10);
}

const a = random();

switch (a) {
    case 0:
        console.log('a is 0'); 
        break;
    case 2:
        console.log('a is 2');
        break;
    case 4: 
        console.log('a is 4');
        break;
    default:
        console.log('rest...');
}