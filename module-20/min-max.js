function max(first, second, third) {
    if (first > second && first > third) {
        return first;
    } else if (second > first && second > third) {
        return second;
    } else {
        return third;
    }
}
const largest = max(23512, 44435, 60023);
console.log("the  largest number is ", largest);

function min(first, second, third) {
    if (first < second && first < third) {
        return first;
    } else if (second < first && second < third) {
        return second;
    } else {
        return third;
    }
}

const smallest = min(24, 456, 46);
console.log("The smallest number is ", smallest);