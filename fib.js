function fibs(n) {
    const array = [0, 1];
    for (let i = 2; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2];
        array.concat(array[i]);
    }
    return array;
}
console.log(fibs(9));

function fibRecs(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0]
    }
    if (n === 2) {
        return [0, 1];
    }

    if (n > 2) {
        let array = fibRecs(n - 1);
        array.push(array[array.length - 1] + array[array.length - 2]);
        return array;
    }
}
console.log(fibRecs(9));