// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

//style 프로퍼티 
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = 'lavender';
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = 'lavender';


// className 프로퍼티
today.children[1].className = 'done';

// classList 프로퍼티 
// 개별적으로 바꿀 때
console.log(today.classList);
console.log(today.children[1].classList);

const item = tomorrow.children[1];
//add
item.classList.add('done');
//remove
item.classList.remove('done');

//toggle 
item.classList.toggle('done',true); // add
item.classList.toggle('done',false); // remove