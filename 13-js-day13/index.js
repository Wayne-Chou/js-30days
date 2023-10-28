
// 取得所有圖片
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {

    sliderImages.forEach(sliderImage => {
        // window.scrollY 表示当前滚动的垂直位置
        // window.innerHeight 表示当前可视区域的高度。
        // sliderImage.height / 2 表示图片高度的一半。
        // slideInAt最後大概的位置是在可視視窗然後圖片一半的位置
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

        // sliderImage.offsetTop 圖片到頂部的距離sliderImage.height圖片高度
        // imageBottom =可視視窗到圖片底部
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        // isHalfShown代表圖片一半是否在可視區域内
        // slideInAt大於圖片頂部就表示圖片在可視區域內
        const isHalfShown = slideInAt > sliderImage.offsetTop;

        // isNotScrolledPast判斷是否滾動到圖片底部
        // window.scrollY < imageBottom说明页面还没有滾動到图片底部。
        const isNotScrolledPast = window.scrollY < imageBottom;
        // 代表圖片一半是否在可視區域内&&页面滾動到圖片底部加上active class
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}


window.addEventListener('scroll', checkSlide);
