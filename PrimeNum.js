const PrimeNum = (n) => {
  let isPrime = false;
  
  if (n < 2) {
    return isPrime;
  }

  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      return isPrime;
    }
    return !isPrime;
  }
};

console.log(PrimeNum(1));
