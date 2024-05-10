// check if all elements in the given sequence are equal.
// Working solution
function allTheSame(elements) {
    if (elements.length === 0 || elements.length === 1) {
        return true;
    }
    var firstElementInTheArr = elements[0];
    for (var i = 0; i < elements.length; i++) {
        if (firstElementInTheArr !== elements[i]) {
            return false;
        }
    }
    return true;
}
// assert.strictEqual(allTheSame([1, 1, 1]), true);
// assert.strictEqual(allTheSame([1, 2, 1]), false);
// assert.strictEqual(allTheSame([1, "a", 1]), false);
// assert.strictEqual(allTheSame([1, 1, 1, 2]), false);
function allTheSame1(elements) {
    return elements.every(function (e) { return e === elements[0]; });
}
// console.log(allTheSame1([1,1,1]))
// console.log(allTheSame1([1,2,1]))
// console.log(allTheSame1([1, 'a', 1]))
// console.log(allTheSame1([1,1,1,2]))
// console.log(allTheSame1([]))
// console.log(allTheSame1([1]))
// You need to count the number of digits in a given string.
function countDigits(text) {
    var chars = text.split('');
    var count = 0;
    for (var i = 0; i < chars.length; i++) {
        if (/\d/.test(text[i])) {
            count++;
        }
    }
    return count;
}
// assert.strictEqual(countDigits("hi"), 0);
// assert.strictEqual(countDigits("who is 1st here"), 1);
// assert.strictEqual(countDigits("my numbers is 2"), 1);
// assert.strictEqual(
//     countDigits(
//         "This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year"
//     ),
//     8
// );
// assert.strictEqual(countDigits("5 plus 6 is"), 2);
// assert.strictEqual(countDigits(""), 0);
console.log(countDigits('ASDF00'));
