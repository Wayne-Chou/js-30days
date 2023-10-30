// 將選擇器儲存在nav變數
const nav = document.querySelector("#main");
// 取得header與頂部之間的距離,將它儲存在topOfNav變數
// offsetTop出處https://www.runoob.com/jsref/prop-element-offsettop.html
let topOfNav = nav.offsetTop;
// window.scorllY網頁垂直已經滾動的位置，並且會返回它的值
// 出處https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollY
// 如果網頁垂直的值大於header與頂部之間的距離就會加上名為fixed-nav的class
function fixNav() {
  if (window.scrollY >= topOfNav) {
    // document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    // document.body.style.paddingTop = 0;
  }
}

window.addEventListener("scroll", fixNav);
