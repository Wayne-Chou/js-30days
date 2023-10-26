//  先取得選擇器
const canvas = document.querySelector('#draw');
// 一開始 canvas 為空白，程式碼腳本需要先存取渲染環境，在上面繪圖，然後才會顯現影像
// <canvas> 素有一個方法 (en-US)叫 getContext()，透過此方法可以取得渲染環境及其繪圖函數（function）；
// getContext() 輸入參數只有渲染環境類型一項，像本教學所討論的 2D 繪圖，就是輸入「2d」。
const ctx = canvas.getContext('2d');
// 確保畫布佔滿整個寬度
canvas.width = window.innerWidth;
//  確保畫布佔滿整個高度
canvas.height = window.innerHeight;
// 设置绘制线条的颜色为 '#BADA55'。
ctx.strokeStyle = '#BADA55';
// 設定圓角
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// 設定寬度為100
ctx.lineWidth = 100;


// 確認使用者開始畫了沒，一開始為否
let isDrawing = false;
// 設定位置x為0
let lastX = 0;
// 設定位置y為0
let lastY = 0;
// hue代表顏色0為初始值
let hue = 0;
// direction是一个布尔值（true 或 false），用于控制线条的宽度
// 它表示线条宽度的增加或减小方向
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    //  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;設定顏色值
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // beginPath() 方法開始繪製
    ctx.beginPath();

    // 將位置移動至新的x跟y
    ctx.moveTo(lastX, lastY);
    // lineTo由lastX, lastY到現在滑鼠e.offsetX, e.offsetY位置
    ctx.lineTo(e.offsetX, e.offsetY);
    // stroke() 方法將剛剛從 moveTo 到 lineTo）畫出来
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // 顏色每次加1
    hue++;
    // 確保hue的值範圍在360,一開始為0
    if (hue >= 360) {
        hue = 0;
    }
    // 線的寬度設定在1到100,如果到100則變回1
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        // 線條寬度增加
        ctx.lineWidth++;
    } else {
        // 線條寬度減少
        ctx.lineWidth--;
    }

}

// 滑鼠的鍵鈕被按下，開始畫畫
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

// 滑鼠開始移動
canvas.addEventListener('mousemove', draw);

// 滑鼠的鍵鈕釋放彈起
canvas.addEventListener('mouseup', () => isDrawing = false);
// 滑鼠從目標上方移出。
canvas.addEventListener('mouseout', () => isDrawing = false);
// 來源https://kknews.cc/zh-tw/code/pkoyrme.html
