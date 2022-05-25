const sleep = document.querySelector('#sleep');
const sleepy = document.querySelector('#sleepy');

// 노드 삭제하기: Node.remove()
// sleepy.remove();
// sleep.children[2].remove();

// 노드 이동하기: preppend, append, before, after
// sleep.append(sleepy.children[1]);

sleepy.children[1].after(sleep.children[1]);
sleepy.children[2].before(sleep.children[1]);
sleepy.lastElementChild.before(sleep.children[0]);
