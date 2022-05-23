let fruit = "apple"
let fruit2 = "banana"
let fruit3 = "grape"
let fruit4 = "mango"  // 메모리 많이 차지함 그래서 배열 쓰는거임

let fruits = ["banana", "apple", "grape", "mango"]
console.log(fruits)
console.log(fruits[1])

fruits[0] = "cherry"
console.log(fruits) 

// pop(): 마지막에 있는 아이템을 뺌
fruits.pop();
console.log(fruits);

//push(): 
fruits.push("pineapple")
console.log(fruits);


// includes(): 포함하고 있는지를 물어봄. (trur/false)
console.log(fruits.includes("apple"));
console.log(fruits.includes("peach"));

// indexOf() : 인덱스 번호를 알려줌.
console.log(fruits.indexOf("apple"));

// slice(순번): 순번부터 잘린 값들이 반환됨
// 배열의 아이템들을 잘라내는 역할

console.log(fruits.slice(1)) ;
fruits.push("kiwi")
console.log(fruits)
console.log(fruits.slice(1,3)) // 1번부터 3번 이전까지 (3번 포함 X)


// splice(시작점, 개수) : 배열 아이템을 잘라내는 역할
console.log(fruits)
fruits.splice(1, 2)
console.log(fruits)


