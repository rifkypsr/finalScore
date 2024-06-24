function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // ini berfungsi untuk menukar elemen
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let array = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21];
console.log("Before: " + array);

let sortedArray = bubbleSort(array);
console.log("After: " + sortedArray);
