// 將各個選擇器儲存至各個變數
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


// 滑鼠移入觸發
function handleEnter() {
    // 增加class
    this.classList.add('trigger-enter');
    // 0.15秒後如果這個class包含trigger-enter就在加上trigger-enter-active
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    // 增加open class
    background.classList.add('open');

    // 將dropdown儲存在dropdown變數
    const dropdown = this.querySelector('.dropdown');
    // 透過元素：getBoundingClientRect() 方法取得dropdown視窗位置大小
    // 出處https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const dropdownCoords = dropdown.getBoundingClientRect();
    // 同上
    const navCoords = nav.getBoundingClientRect();

    // 將計算的寬高跟水平垂直距離儲存在cords變數
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    //最後計算完的結果透過setProperty取得剛剛計算好的值
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

// 滑鼠移出時將以下class移除
function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

// 滑鼠移入時觸發
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
// 滑鼠移出時觸發
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
