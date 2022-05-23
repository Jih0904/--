// For Statement 
// for (시작조건; 종료조건; 변화조건) {} 

for (let i=0; i<3; i+=1) { // i = 1 + 1
    console.log(i);
}

for (let i=0; i<0; i++) {
    console.log();
}
console.log('end');

const ulEl = document.querySelector('ul');
console.log(ulEl);

for (let i=0; i<3; i+=1) { // 0 1 2
    const li = document.createElement('li');
    li.textContent = `list-${i+1}`;
    ulEl.appendChild(li);

}