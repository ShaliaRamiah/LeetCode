function powerOfFour(n) {
    if (n == 0){
      return false;
    }
    while (n % 4 == 0){
      n /= 4;
    }
    return n == 1;
}

let number = 5;

let result = powerOfFour(number);

console.log(result);