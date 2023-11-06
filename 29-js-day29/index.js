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
    // remainderSeconds < 10 ? '0' : ''如果餘數小於10就加上0在前面確保顯示為2位數
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

    // 最後將結果顯示在畫面上
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    // 透過new Date來指向某一個時間點並帶參數
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date
    const end = new Date(timestamp);
    // 透過getHours來取得小時數
    const hour = end.getHours();
    // 使用3元運算子如果小時大於12就減去12
    // 例:如果hour為15減去12結果就為下午3點
    // 例:如果小於12則是hour的值,hour為9則為早上9點
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    // 透過getMinutes取得分鐘
    const minutes = end.getMinutes();
    // 最後將結果顯示在畫面上
    // minutes < 10 ? '0' : ''如果小於10前面加上0確保顯示2位數
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}



function startTimer() {
    // 將html自訂的data-time資料透過parseInt將字串轉為整數
    // 在使用dataset來取得值後面接你命名的值,例:data-time後面接time
    const seconds = parseInt(this.dataset.time);
    // 最後觸發timer function
    timer(seconds);
}
//按鈕點擊時觸發
buttons.forEach(button => button.addEventListener('click', startTimer));
// 使用document接表單名稱監聽是否送出
document.customForm.addEventListener('submit', function (e) {
    // 阻止預設行為
    e.preventDefault();
    // mins儲存使用者輸入的值
    // minutes為html name的名子
    const mins = this.minutes.value;
    console.log(mins);
    // 將mins乘上60換成秒數以便計算分鐘
    // 例:輸入5為(5*60)=300秒為5分鐘
    timer(mins * 60);
    // 使用js的reset清空表單內容
    this.reset();
});
