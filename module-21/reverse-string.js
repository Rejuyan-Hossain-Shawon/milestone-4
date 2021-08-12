let greeting = "hellow good morning madam";

function reversed(text) {
    let reverse = "";
    for (let item of greeting) {
        reverse = item + reverse;
    }
    return reverse;
}

const result = reversed(greeting);
console.log(result);