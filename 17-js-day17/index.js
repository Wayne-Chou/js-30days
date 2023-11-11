// 將陣列儲存在bands變數
// 出處https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
const bands = ["The Plot in You", "The Devil Wears Prada", "the"];

// strip funtion帶參數bandName
// 用trim去除左右空白
function strip(bandName) {
  console.log("bandName", bandName);
  console.log(
    "bandName.replace(/^(a |the |an )/i, '').trim()",
    bandName.replace("Plot", "apple").replace("the", "hank").trim()
  );
  return bandName.replace("Plot", "apple").replace("the", "hank").trim();
}

// 這裡使用sort排序並且觸發strip funtion在排序
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// 最後取得html名為#bands的id選擇器
// 並將剛剛排序好的使用map回傳新的陣列
// join() 方法用來將陣列的所有元素按指定的分隔符號合併成一個字串。
document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");

console.log(sortedBands);
