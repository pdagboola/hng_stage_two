const isArmstrongEven = require("../helpers/properties");
const isPerfect = require("../helpers/isPerfect");
const isPrime = require("../helpers/isPrime");
const nubmerSchema = require("../schema/numberSchema");
const digitSum = require("../helpers/digitSum");

const numberController = async (req, res) => {
  try {
    const result = nubmerSchema.safeParse(req.query);

    if (result.error) {
      res.status(400).json({
        number: "alphabet",
        error: true,
      });
    }
    const { number } = result.data;
    const is_prime = isPrime(number);
    const is_perfect = isPerfect(number);
    const properties = isArmstrongEven(number);
    const sum = digitSum(number);
    const response = await fetch(`http://numbersapi.com/${number}`);
    const fun_fact = await response.text();

    res.status(200).json({
      number: number,
      is_prime: is_prime,
      is_perfect: is_perfect,
      properties: properties,
      digit_sum: sum,
      fun_fact: fun_fact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occured",
    });
  }
};

module.exports = numberController;
