function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length-1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[left] <= arr[mid]) { // if left is sorted
            if (arr[left] <= target && target <= arr[mid]) {
                right[mid-1]; // target is within range of left quadrant
            }
            else (
                left[mid+1] // target is within right quadrant
            )
        }
        else {
            if (arr[mid] <= target && target <= arr[right]) {
                left[mid+1]
            }
            else {
                right[mid-1];
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex