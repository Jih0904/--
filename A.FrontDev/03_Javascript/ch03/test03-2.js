// 템플릿 문자열(Template String)
// $[표현식]을 이용하여 삽입 처리 가능
// 삽입 처리; 표현식의 계산된 결과가 문자열로 변경되서 해당 위치에 삽입

let cart = [ // 객체
    { name: '옷', price:2000 },
    {name: '가방', price:3000}
]

let numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다`;
console.log(numOfItems);

// 템플릿 문자열은 기존 문장열과 다르게 멀티라인이 가능
// 코드 작성 시 개행하여 작성한 그대로 정의됨

let cartTable =
`<ul>
    <li>품목:${cart[0].name}, 가격: ${cart[0].price}</li>
    <li>품목:${cart[1].name}, 가격: ${cart[1].price}</li>
</ul>`
console.log(cartTable);

let personName = `George`
let helloString = `luv` + personName; // `hello` + `George`

let = helloTemplateString = `luv${personName}`; 
console.log(helloString);
console.log(helloTemplateString);

console.log(helloString === helloTemplateString);
console.log(typeof helloTemplateString); //string타입

