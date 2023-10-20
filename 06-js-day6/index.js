// 將json儲存至endpoint
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// cities設定為空用來儲存城市
const cities = [];
// fetch取得網址資源
fetch(endpoint)
    // 轉換成json格式
    .then(blob => blob.json())
    // 再將數據儲存至cities
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    // 使用filter去篩選參數place帶入
    return cities.filter(place => {
        // 建立正則表達式去比對在陣列裡面相符的
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}



function displayMatches() {
    // 將findMatches的值儲存至matchArray
    const matchArray = findMatches(this.value, cities);
    //將matchArray儲存至html用map處理陣列的元素
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        // 使用replace更換點選的值
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        // 最後回傳更新的值
        return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
        // 在加入到html頁面上
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
