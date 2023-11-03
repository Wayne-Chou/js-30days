// 設定一個變數用來停止
let countdown;
// 將各個選擇器儲存在各個變數內
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


// 計時器funtion帶參數seconds
function timer(seconds) {
    // 使用clearInterval將時間停掉,帶入參數countdown
    // 出處https://www.runoob.com/jsref/met-win-clearinterval.html
    clearInterval(countdown);

    // Date.now() 方法回傳自 1970/01/01 00:00:00 UTC 起經過的毫秒數。
    // 出處https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    // 將取得現在值間存在now變數
    const now = Date.now();
    // 將取得的時間加上秒數乘上1000
    const then = now + seconds * 1000;
    // 顯示畫面上的時間
    displayTimeLeft(seconds);
    // 顯示結束時間
    displayEndTime(then);

    // setInterval方法每1秒執行一次,1000毫秒=1秒
    // 出處https://www.runoob.com/jsref/met-win-setinterval.html
    countdown = setInterval(() => {
        // 計算當前時間到預定時間還有多久換算成秒再用Math.round取整數
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // 如果時間變成小於0表示時間到結束
        // 使用clearInterval停止並回傳
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // 如果時間還大於0就將資訊更新在畫面上
        displayTimeLeft(secondsLeft);
    }, 1000);
}




function displayTimeLeft(seconds) {
    // 計算完整的1分鐘並且用Math.floor取整數
    const minutes = Math.floor(seconds / 60);
    // 計算不足1分鐘剩下的秒數
    const remainderSeconds = seconds % 60;
    // minutes為計算後的分鐘
    // remainderSeconds < 10 ? '0' : ''如果餘數小於0就加上0在前面確保顯示為2位數
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    // document.title = display;
    // 最後將結果顯示在畫面上
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    // 透過new Date來指向某一個時間點並帶參數
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date
    const end = new Date(timestamp);
    // 透過getHours來取得小時數
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});
