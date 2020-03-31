if ([]) {
    console.log('true')
} else {
    console.log('false')
}

if ('' > '') {
    console.log('true')
} else {
    console.log('false')
}

if ('2020-05-07' < '2020-05-06') {
    console.log(true)
} else {
    console.log(false)
}

console.log("杭州市 HaZ".slice(-3).trim())

console.log([1, 2, 3].concat([4, 5, 6], ('' ? 'status_content' : [1, 2])).join(','))

if (!(/^[\u4e00-\u9fa5\·]{1,6}$/g).test('马·顺德')) {
    console.log('no pass')
}

console.log([1, 2].forEach((ele, index) => { return index }))