// 요소 노드 주요 프로퍼티

const myTag = document.querySelector('#list-1');

// innerHTML
// 요소 안에 있는 html 자체를 분자열로 리턴해줌 
// 태그와 태그 사이의 들여쓰기와 줄바꿈 그대로 

console.log(myTag.innerHTML); // 확인

// myTag.innerHTML = '<li>sleepy</li>'     // 수정
myTag.innerHTML += '<li>sleepy</li>'    

// outerHTML
// 해당 요소를 포함한 전체 html 코드를 문자열로 리턴
// 태그와 태그 사이의 들여쓰기와 줄바꿈 그대로

console.log(myTag.outerHTML);

// textContext
// inerHtml과 유사 
// 요소 안에 있는 내용들 중에서 html을 제외한 텍스트만 가져옴
console.log(myTag.textContent);

myTag.textContent = 'new text!';
myTag.textContent = '<li>sleepy</li>' ; // 특수문자도 텍스트로 출력