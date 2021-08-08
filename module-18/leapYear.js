function isLeapYear(year) {
    if (year % 100 != 0) {
        if (year % 4 == 0) {
            return true;

        } else {
            return false;
        }
    } else if (year % 400 == 0) {
        return true;
    } else {
        return false;
    }

}


const result = isLeapYear(2112);
console.log(result);