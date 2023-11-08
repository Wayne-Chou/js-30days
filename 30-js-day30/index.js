
// 將各個選擇器儲存在各個變數內
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
// 儲存上個洞的變數為lastHole
let lastHole;
// 設定時間是否到了一開始為false
let timeUp = false;
// 設定分數一開始為0
let score = 0;


// min, max作為參數帶入對應的是200,跟1000
function randomTime(min, max) {
    // Math.round函數回傳四捨五入後的近似值.
    // Math.random()方法傳回一個大於或等於 0 且小於 1 的浮點偽隨機數
    return Math.round(Math.random() * (max - min) + min);
}



function randomHole(holes) {
    //  Math.random()方法傳回一個大於或等於 0 且小於 1 的浮點偽隨機數
    // Math.floor() 函式會回傳小於等於所給數字的最大整數。
    // 代表隨機一個洞口將它儲存在idx變數
    const idx = Math.floor(Math.random() * holes.length);
    // 將隨機生成的洞儲存在hole變數
    const hole = holes[idx];
    // 如果出現的洞跟上個洞一樣做以下事情
    if (hole === lastHole) {
        // 後臺印出已經出現重複的訊息
        console.log('Ah nah thats the same one bud');
        // 如果跟上次一樣就重新選以確保不會重複
        return randomHole(holes);
    }
    // 確保下個洞不會跟當前一樣
    lastHole = hole;
    // 最後顯示地鼠位置
    return hole;
}



function peep() {
    // 將參數帶入randomTime function儲存在time變數
    const time = randomTime(200, 1000);
    // 將參數帶入randomHole function儲存在hole變數
    const hole = randomHole(holes);
    // hole加上class up
    hole.classList.add('up');
    // 透過setTimeout移除up class
    setTimeout(() => {
        hole.classList.remove('up');
        // 時間還未到因此peep() function繼續執行
        if (!timeUp) peep();
    }, time);
}


function startGame() {
    // 一開始分數版為0
    scoreBoard.textContent = 0;
    // 時間到一開始為false
    timeUp = false;
    // 用於計算分數一開始為0
    score = 0;
    // 觸發peep function
    peep();
    //10秒後時間到timeUp為true
    setTimeout(() => timeUp = true, 10000)
}

function bonk(e) {
    // isTrusted 來確認是否為使用者操作
    // 出處https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted
    // 如果不是使用者操作就直接回傳不執行以下程式碼
    if (!e.isTrusted) return;
    // 分數增加
    score++;
    // 父節點移除up class
    this.parentNode.classList.remove('up');
    // 將得到的分數更新在畫面上
    scoreBoard.textContent = score;
}

// 使用者點到地鼠時觸發
moles.forEach(mole => mole.addEventListener('click', bonk));
