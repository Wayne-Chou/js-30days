// 將各個選擇器儲存至各個變數
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// JSON.parse() 可以接收 JSON 字串，轉為 Javascript 物件或是值。
// 出處https://medium.com/itsems-frontend/javascript-json-stringify-and-json-parse-7a1251d3824c
// localStorage.getItem(key)是用於從本機儲存中取得特定鍵的值。
// 將接收JSON 字串轉為js物件或是陣列在從本機儲存中取得特定鍵的值或是空陣列
// 出處https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
// 儲存在items變數
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    // 阻止預設行為防止表單默認提交
    e.preventDefault();
    // 將用戶輸入的值儲存在text變數
    const text = (this.querySelector('[name=item]')).value;
    // text為使用者輸入的值,done為布林值未完成
    // 最後儲存在item變數
    const item = {
        text,
        done: false
    };
    // 使用push將item添加到items
    items.push(item);
    // populateList function更新畫面
    populateList(items, itemsList);

    // 將items的資料透過setItem儲存在本機中
    // JSON.stringify將js轉為json格式
    localStorage.setItem('items', JSON.stringify(items));
    // 最後透過reset清空表單資訊
    this.reset();
}

// populateList(items, itemsList)的item對應plates = [],itemsList對應platesList
// 當作參數代入
function populateList(plates = [], platesList) {
    // 使用map回傳新的陣列在使用join將將陣列（或一個類陣列（array-like）物件 (en-US)）中所有的元素連接、合併成一個字串，並回傳此字串。
    // 透過innerHTML傳入
    platesList.innerHTML = plates.map((plate, i) => {
        return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
    }).join('');
}

function toggleDone(e) {
    // 透過e.target跟matches確認是否是input不是則回傳
    if (!e.target.matches('input')) return;
    // 將e.target事件對象儲存在el變數
    const el = e.target;
    // 透過dataset獲取跟data開頭有關的資訊,後面index為索引值
    // 可開下面console註解看
    const index = el.dataset.index;
    // console.log("el.dataset.index", el.dataset.index)

    // items[index].done 一開始可能是true 或 false 中的一个。
    // 透過驚嘆號非來達到可以让 true 和 false 之间来回切换。
    // 如果 items[index].done 是 true，則 !items[index].done 會變成 false，反之亦然。
    items[index].done = !items[index].done;

    // 將items的資料透過setItem儲存在本機中
    // JSON.stringify將js轉為json格式
    localStorage.setItem('items', JSON.stringify(items));
    // populateList function更新畫面
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

// 能夠看到之前儲存的資料再次顯示在畫面上
populateList(items, itemsList);
