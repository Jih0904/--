let price = 0;
let coffee = "아메리카노111";

switch(coffee) {
    case "espresso":
        break;
    case "아메리카노":
        price = 5000;
        break;
    case "카페라떼":
        price = 6000;
        break;
    case "카푸치노":
        price = 6500;
        break;
    default: 
        console.log(coffee + "은(는) 없습니다.")  //위에 해당사항이 없을때! 어떤것도 실행이 안됐을 떄 디폴트가 실행
}

if (price != 0) {
    console.log(coffee + "는" + price + "원입니다.")
}

// if (price != 0) 
//     console.log(coffee + "는" + price + "원입니다.")  // 실행문이 한 줄 일때 블록 생략 가능. 
    
// break 를 안써서 아메리카노 6500원 됐음.

// 