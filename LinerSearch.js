const LinerSearch = (n, tar) => {
  for (let i = 0; i < n.length; i++) {
    if (tar === n[i]) {
      console.log(n[i]);
      break;
    }
  }
  console.log(-1)
};
LinerSearch([-5, 2, 10, 4, 6], 88);
