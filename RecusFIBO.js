const Fibo = (n) => {
  if (n < 2) return n;
  let res = Fibo(n - 1) + Fibo(n - 2);
  console.log(`${Fibo(n - 1)} and ${Fibo(n - 2)}`);

  return res;
};

console.log(Fibo(4));
