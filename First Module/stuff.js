var counter = (arr) => {
    return 'There are ' + arr.length + ' elements in this array.';
}

var adder = (a, b) => {
    return 'The sum of the 2 numbers is ' + (a+b);
}

var pi = 3.14159;

module.exports = {
    counter : counter,
    adder: adder,
    pi: pi,
}