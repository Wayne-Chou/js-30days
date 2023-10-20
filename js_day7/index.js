const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// const isAdult = people.some(function (person) {
//     const currentYear = (new Date()).getFullYear();
//     if (currentYear - person.year >= 19) {
//         return true;
//     }
// });

// some()會將陣列中的「每一個」元素帶入指定的函式內做判斷，
// 只要有任何一個元素符合判斷條件，就會回傳 true，如果全都不符合，就會回傳 false。
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({ isAdult });


// every()會將陣列中的「每一個」元素帶入指定的函式內做判斷，
// 只要有任何一個元素不符合判斷條件，會回傳 false，如果全部符合，就會回傳 true。
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({ allAdults });



// find()會將陣列中的「每一個」元素帶入指定的函式內做判斷，
// 並會回傳第一個符合判斷條件的元素，如果沒有元素符合則會回傳 undefined。
const comment = comments.find(comment => comment.id === 823423);

console.log(comment);


// findIndex()會將陣列中的「每一個」元素帶入指定的函式內做判斷，
// 並會回傳第一個符合判斷條件元素的位置號碼，如果沒有元素符合則會回傳 -1。
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);



