// (1)
// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누른다.

// (2)
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 Up!!

// (3)
// Reset 버튼을 누르면 게임이 리셋

let computerNum = 0;
let playButton = document.getElementById('play-button'); // 쿼리만 cSS선택자라 얘는 # 안붙는다.
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log('정답', computerNum);
}


function play() {
    console.log('게임시작');
    let userValue = userInput.value;
    console.log(userValue);

    if(userValue < computerNum) {
        console.log('up!');
        resultArea.textContent = 'up!'
    } else if (userValue > computerNum) {
        console.log('Down!');
        resultArea.textContent = 'Down!'
    } else {
        console.log('정답입니다~!');
        resultArea.textContent = '정답입니다~!'
        
    }
}

function reset () {
    // user input창 깨끗하게 정리 
    userInput.value = '';
    // 새로운 번호가 생성
    pickRandomNum(); 
    resultArea.textContent = '리셋이 되었습니다.'
}

pickRandomNum(); 
