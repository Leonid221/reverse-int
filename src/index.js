module.exports = function reverse (n) {

    let reverseStr = Math.abs(n).toString().split('').map(int => parseInt(int, 10)).reverse().join('');

    return Number(reverseStr);  

}
