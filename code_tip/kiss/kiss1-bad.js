// bad
function getFirst(array, isEven) {
    return array.find((x) => (isEven ? x % 2 === 0 : x % 2 !== 0));
}

// =>
// parameter isEven에 따라 다른 동작을 하도록 하는 것은 심플하지 않음
function getFirstTry(array, isEven) {
    if (isEven) {
        return array.find((x) => x % 2 == 0);
    } else {
        return array.find((x) => x % 2 !== 0);
    }
}
