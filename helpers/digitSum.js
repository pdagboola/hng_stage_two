const digitSum = (num) => {
  const numArr = String(Math.abs(num)).split("").map(Number);
  return numArr.reduce((sum, digit) => sum + digit, 0);
};

module.exports = digitSum;
