
const toDoList = document.querySelector("#list");  // 왜 null이 뜨지..

// const text1 = document.createElement('ul')
// text1.textContent = '하이'
// toDoList.prepend(text1)


function addNweList(text) {
    const li = document.createElement('li');
    li.textContent = text;
    toDoList.append(li);

}

addNweList('HTML 공부하기');
addNweList('CSS 공부하기');
addNweList('Javascript 공부하기');

