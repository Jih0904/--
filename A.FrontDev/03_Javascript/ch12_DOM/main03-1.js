// 기존의 요소들을 덮어쓰는 방식
const sleep = document.querySelector('#sleep');

sleep.innerHTML = '<li>처음</li>' + sleep.innerHTML;
sleep.innerHTML = sleep.innerHTML + '<li>마지막</li>';

sleep.outerHTML = '<p>이전</p>' + sleep.outerHTML;

const newSleep = document.querySelector('#sleep');
newSleep.outerHTML = newSleep.outerHTML + '<p>다음</p>';