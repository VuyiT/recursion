function merge(left, right) {
    let resultArray = [];
    leftIndex = 0;
    rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const midPoint = Math.floor(array.length / 2);
    const leftArray = array.slice(0, midPoint);
    const rightArray = array.slice(midPoint);

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    )
}
console.log(mergeSort([3,2,1,13,8,5,0,1]));