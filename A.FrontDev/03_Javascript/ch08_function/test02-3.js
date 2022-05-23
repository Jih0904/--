// 부가세를 계산하는 함수 

function calTax(salePrice) {
    let vat = 0.1;          
    let tax = salePrice * vat
    return tax;
}
let myTax = calTax(100)

console.log(myTax);