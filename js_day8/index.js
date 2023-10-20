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
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();

    ctx.moveTo(lastX, lastY);

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
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