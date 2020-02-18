function square(n) {
    if (n<=0) {
        return n + ' is not natural number';
        // break;
    }
    return (n*(n+1)*((2*n)+1))/6;
}

module.exports = square;
