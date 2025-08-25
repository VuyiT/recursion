function fibs(n) {
    const array = [0, 1];
    for (let i = 2; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2];
        array.concat(array[i]);
    }
    return array;
}
console.log(fibs(9));