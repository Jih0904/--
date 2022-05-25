// 요소 노드 추가하기
// 요소 노드를 직접 생성해서 그 요소만 필요한 곳에 추가 

const newSleep = document.querySelector('#sleep');

// 3단계
// 1. 요소 노드 만들기 : documnet.createElement('태그이름');
const first = document.createElement('li');

// 2. 요소 노드 꾸미기 : textContent,innerHTML, ...
first.textContent = '처음';

// 3, 요소 노드 추가
// NODE.prepend(), append(), after(), before()

// prepend
// 메소드를 호출한 노드의 제일 첫번째 노드로 파라미터로 전달한 값을 추가
sleep.prepend(first);  

// append 
// 파라미터로 전달한 값을 제일 마지막 자식 노드로 추가
const last = document.createElement('li');
last.textContent = '마지막';
sleep.append(last);

// before 
// 메소드를 호출한 노드의 앞쪽에 파라미터로 전달한 값을 형제 노드로 추가

const prev = document.createElement('p');
prev.textContent = '이전';
sleep.before(prev);

// after
// 메소드를 호출한 노드의 뒤쪽에 파라미터로 전달한 값을 형제 노드로 추가 

const next = document.createElement('p');
next.textContent = '다음';
sleep.after(next);
