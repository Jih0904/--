// HTML 속성 (Attribute)
// HTML 태그들이 갖고 있는 속성들은 요소 노드의 프로퍼티가 된다.

const tomorrow = document.querySelector('#tomorrow');

const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// 비표준 속성으로는 프로퍼티에 접근 불가
console.log(tomorrow.href); // undefined

// getAtribute('속성') 메소드 는 모든 속성에 접근 가능

console.log(tomorrow.getAttribute('href'));

console.log(item.getAttribute('class'));

// setAttribute('속성', '값') : 속성 추가
// 없었던 속성은 추가가 되지만, 존재하는 속성이라면 수정되는 형태로 추가 
tomorrow.setAttribute('class', 'list');
link.setAttribute('href', 'https://www.google.com')

// removeAttribute('속성') : 속성 제거
tomorrow.removeAttribute('href');
tomorrow.removeAttribute('class');