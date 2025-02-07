const isArmstrongEven = (number) => {
  const numArr = String(number).split("").map(Number);
  console.log(numArr);
  const sum = numArr.reduce(
    (acc, digit) => acc + Math.pow(digit, numArr.length),
    0
  );

  if (sum === number && number % 2 === 0) {
    return ["armstrong", "even"];
  } else if (sum === number && number % 2 !== 0) {
    return ["armstrong", "odd"];
  } else if (sum !== number && number % 2 === 0) {
    return ["even"];
  } else if (sum !== number && number % 2 !== 0) {
    return ["odd"];
  }
};

module.exports = isArmstrongEven;
