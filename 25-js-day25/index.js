// 將選擇器儲存在設定好的變數
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');
// 以下為事件捕獲、事件冒泡
//參考 https://hsien-w-wei.medium.com/dom-event-propagation-i-%E4%BA%8B%E4%BB%B6%E6%8D%95%E6%8D%89%E5%92%8C%E5%86%92%E6%B3%A1-event-capture-bubble-8214bf146b35
// 利用classList取得該元素在透過console印出值
// 點選最裡面的div會觸發事件冒泡由內往外因此會印出three、two、one
// 事件捕獲為由外到內會分別印出one、two、three
// 點擊最裡面的div會由內而外都觸發
// 因此使用stopPropagation阻擋冒泡亂觸發父層事件

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation();
    // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

// 而使用once代表觸發一次
button.addEventListener('click', () => {
    console.log('Click!!!');
}, {
    once: true
});
