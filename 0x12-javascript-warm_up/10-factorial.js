#!/usr/bin/node
function factorial (z) {
  if (z < 0) {
    return (-1);
  }
  if (z === 0 || isNaN(z)) {
    return (1);
  }
  return (z * factorial(z - 1));
}

console.log(factorial(Number(process.argv[2])));
