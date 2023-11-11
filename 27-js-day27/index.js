// 將選擇器items儲存在slider變數
const slider = document.querySelector(".items");
// 確認滑鼠是否按下預設是false
let isDown = false;
// 是滑鼠按下的水平位置
let startX;
// 是滑鼠按下水平滾動位置
let scrollLeft;

// 滑鼠按下時觸發
slider.addEventListener("mousedown", (e) => {
  // 滑鼠已經按下
  isDown = true;
  // 加上class active
  slider.classList.add("active");

  // 水平位置減去位移位置
  startX = e.pageX - slider.offsetLeft;
  // 最後更新位置
  scrollLeft = slider.scrollLeft;
});

// 滑鼠離開時觸發
slider.addEventListener("mouseleave", () => {
  // 滑鼠離開
  isDown = false;
  // 移除class active
  slider.classList.remove("active");
});
// 滑鼠按鍵放開時觸發
slider.addEventListener("mouseup", () => {
  // 滑鼠離開
  isDown = false;
  // 移除class active
  slider.classList.remove("active");
});

// 滑鼠移動時觸發
slider.addEventListener("mousemove", (e) => {
  // 如果是true回傳
  if (!isDown) return;
  // 阻止預設事件
  e.preventDefault();
  // 水平位置減去位移位置
  const x = e.pageX - slider.offsetLeft;

  //   console.log("e.pageX - slider.offsetLeft", e.pageX - slider.offsetLeft);
  // 步數等於水平位置減去位移位置在減去滑鼠位置乘上3
  const walk = (x - startX) * 3;
  //   console.log("(x - startX) * 3", walk);
  //   console.log("startX", startX);
  // 最後更新位置
  slider.scrollLeft = scrollLeft - walk;
});
