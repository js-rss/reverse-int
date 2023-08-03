module.exports = function reverse (n) {
  n < 0 ? n = n * -1:n = +n;
    let a = n.toString().split('').reverse().join('')*1;
    return a;
}
