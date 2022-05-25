// Dom 트리_요소 노드
const myTag = document.querySelector('#content')
console.log(myTag);

// 자식 요소 노드
console.log(myTag.children);
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

// 부모 요소 노드
console.log(myTag.parentElement);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

const myTag2 = document.querySelector('#list-1');
console.log(myTag2);
console.log(myTag2.previousElementSibling);
console.log(myTag2.nextElementSibling);

console.log(myTag2.parentElement);
console.log(myTag2.parentElement.nextElementSibling);