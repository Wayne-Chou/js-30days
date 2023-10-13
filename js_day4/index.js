const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];


// filter() 基本用法分別是過濾、找到特定元素以及關鍵字搜尋
// 有三個參數，第1個為element縮寫為e 第2個index代表目前處理到的元素的索引位置(選填) array 代表陣列本身(選填)
// 使用filter
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);


// map()會處理陣列中每個元素，最後回傳出一個新的陣列
// 有三個參數，第1個為element縮寫為e 第2個index代表目前處理到的元素的索引位置(選填) array 代表陣列本身(選填)
// 使用map
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log("fullNames", fullNames);



// 使用sort
// 如果返回值為正的表示正敘返回負的則為反敘

// const ordered = inventors.sort(function (a, b) {
//     if (a.year > b.year) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// 以下為三元運算子
// 用法：? 前面是條件表達，如果條件為 true ，執行冒號前方，如果條件表達 false ，執行冒號後方
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(ordered);




// 使用reduce()可以將陣列中每個元素進行計算
// 有四個參數，第一個是計算的值自己命名 ( 必填 )，第二個是取得的元素element縮寫為e ( 必填 )
// 第三個是該元素的索引值index ( 選填 )，第四個是原本的陣列array ( 選填 )。
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);





const oldest = inventors.sort(function (a, b) {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);





const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);





// 使用reduce計算重複出現的交通工具
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);