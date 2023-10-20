// 取得Selector
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {
    // 使用3元運算子判斷是否為暫停不是則撥放
    // video.paused 是 true表示影片現在是暫停，結果為play表示應該撥放
    //  video.paused 是 false表示影片現在是播放，結果為pause表示應該暫停
    const method = video.paused ? 'play' : 'pause';
    // 如果上面method為play下方video[method]();的值為play如果不是則為pause
    video[method]();
}

function updateButton() {
    // 使用3元運算子判斷是否為暫停並改變icon
    // this.paused是 true表示影片現在是暫停,icon則變'►'
    // this.paused是 false表示影片現在是播放,icon則變'❚ ❚'
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    // 最後用textConten改變裡面的icon
    toggle.textContent = icon;
}

// currentTime 屬性設定或傳回音訊/視訊播放的目前位置（以秒為單位）
// 例:vid.currentTime = 5;設定時間為5秒
// parseFloat() 將字串轉換為以十進位表示的浮點數,僅接受一個參數。
// 欲轉換的值。若第一個參數值的類型不是 String，會先使用 ToString 轉換成字串。
// dataset會去讀取html自訂data-*屬性都有一個條目。
// 屬性名稱以data-. 它只能包含字母、數字、破折號 ( -)、句點 ( .)、冒號 ( :) 和底線 ( _)。
// 任何ASCII大寫字母 (A到 Z) 都會轉換為小寫。
// dataset訪問值 出處MDN
// 屬性可以透過駝峰名稱/鍵作為資料集的物件屬性來設定和讀取：element.dataset.keyname。名子自己命名
// 也可以使用括號語法設定和讀取屬性： element.dataset['keyname']。
// 操作in員可以檢查給定屬性是否存在： 'keyname' in element.dataset。
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);


    // video.currentTime += parseFloat(this.dataset.skip); 
    // video.currentTime =  video.currentTime + parseFloat(this.dataset.skip);
    // 2個為寫法不同意思一樣
}




function handleRangeUpdate() {
    // 控制音量跟速度
    // 用this指向html input type="range"的name跟value的值
    video[this.name] = this.value;
    // console.log("this.name", this.name)
    // console.log("this.value", this.value)
}


//handleProgress更新進度條 
// currentTime 屬性設定或傳回音訊/視訊播放的目前位置（以秒為單位）
// duration属性以秒为单位给出媒体的长度，如果没有媒体数据可用，则为零。
// 假設video.currentTime當前秒數90/video.duration總長度180 * 100最後為50%
// 最後透過style flexBasis更新進度條位置,css flexBasis寬度會改變達到更新位置
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// offsetX 是鼠标事件对象的属性,能夠得到滑鼠點擊的位置
// HTMLElement.offsetWidth 是一个只读属性，返回一个元素的布局宽度
// 假設progress.offsetWidth總寬度為400,e.offsetX滑鼠點擊位置為200,video.duration總秒數為120秒
// 200/400為0.5  0.5乘總秒數120為60最後更新進度條為60秒的位置
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


// https://www.runoob.com/try/try.php?filename=tryhtml5_av_event_timeupdate
// 要詢問ontimeupdate換成video.addEventListener('timeupdate', handleProgress);差別

video.addEventListener('click', togglePlay);
// jsHTMLMediaElement.play() 方法会尝试播放媒体
video.addEventListener('play', updateButton);
// 当暂停媒体播放时 pause 事件触发
video.addEventListener('pause', updateButton);
// timeupdate 事件在音频/视频（audio/video）的播放位置发生改变时触发。
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// 滑鼠已經按下
progress.addEventListener('mousedown', () => mousedown = true);
// 滑鼠按鍵已經鬆開
progress.addEventListener('mouseup', () => mousedown = false);







