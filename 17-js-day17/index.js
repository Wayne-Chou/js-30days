// 將陣列儲存在bands變數
// 看起來沒將an a the排除發問
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
    'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// strip funtion帶參數bandName
// 回傳使用正則表達排除a、the、an的英文並用trim去除左右空白
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// 這裡使用sort排序並且觸發strip funtion在排序
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);


// 最後取得html名為#bands的id選擇器
// 並將剛剛排序好的使用map回傳新的陣列
// join() 方法用來將陣列的所有元素按指定的分隔符號合併成一個字串。
document.querySelector('#bands').innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');

console.log(sortedBands);