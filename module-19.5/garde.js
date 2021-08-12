function grade(mark) {
    if (mark >= 80) {
        return "your grade is A+";
    } else if (mark >= 60) {
        return "your grade is A";
    } else if (mark >= 50) {
        return "your grade is A-";
    } else if (mark >= 40) {
        return "your grade is B";
    } else if (mark >= 33) {
        return "your grade is B-";
    } else {
        return "you are fail";
    }
}


const result = grade(90);
console.log(result);