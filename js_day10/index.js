// 選取所有checkbox
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// 設定變數還未給值,並且是初始值
let lastChecked;

function handleCheck(e) {
    // inBetween一開始為false,還沒點選checked起點跟末點
    let inBetween = false;
    // shiftKey 事件属性可返回一个布尔值，指示当事件发生时，"SHIFT" 键是否被按下并保持住
    // this表示現在點選的方塊
    if (e.shiftKey && this.checked) {

        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            // checkbox === this表示點選的第1個
            // checkbox === lastChecked表示按下 Shift 鍵的同時按一下第二個時代表結束位置
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }
            // 當inBetween = true
            // 按下checkboxes第1個到最後1個中間都變成勾選
            if (inBetween) {

                checkbox.checked = true;
            }
        });
    }
    // 最後更新lastChecked
    lastChecked = this;
}
// 用forEach遍歷checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));