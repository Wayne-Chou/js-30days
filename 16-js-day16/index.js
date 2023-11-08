const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
// walk設定陰影範圍
const walk = 500;



function shadow(e) {
  // offsetWidth/offsetHeight 是「元素本身」的寬度/高度，並完整了包含了邊界、捲軸及padding。
  // offsetLeft/offsetTop 是元素本身相對於父元素的水平/垂直距離。
  // 透過mousemove觸發將hero的寬度高度分別儲存在width、height
  // 出處https://www.shubo.io/element-size-scrolling/#offsetleft-offsettop
  // 出處https://www.runoob.com/jsref/prop-element-offsetwidth.html
  const { offsetWidth: width, offsetHeight: height } = hero;
  // offsetX 属性返回鼠标指针相对于目标元素的 x 坐标。
  // 透過參數e將滑鼠的x跟y位置分別儲存在x跟y
  // 提示：如需获取 y 坐标，请使用 offsetY 属性。
  // 注释：此属性是只读的。
  // 出處https://www.w3school.com.cn/jsref/event_offsetx.asp

  let { offsetX: x, offsetY: y } = e;




  // x 是鼠标在元素内的水平偏移，y 是鼠标在元素内的垂直偏移。
  // x跟y有負的值因此x跟y分別除hero的高跟寬在乘walk並減去wakl除2
  // walk範圍會是-250到250之間最後透過Math.round取整數
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  // 乘-1是為了每個顏色位置不同
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;


}

hero.addEventListener('mousemove', shadow);
