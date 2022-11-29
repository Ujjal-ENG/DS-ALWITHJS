const Factorial = (n) => {
  let fact = 1
  for (let i = n; i >= 1; i--){
    fact = fact * i
  }
  return fact
}

console.log(Factorial(5))