const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	if(Array.isArray(nums)) {
    return (!nums.length) ? 0 : nums.reduce((total, num) => { return total + num; })
  }

  return undefined;
};

const multiply = function(nums) {
    if(Array.isArray(nums)) {
      return (!nums.length) ? 0 : nums.reduce((total, num) => { return total * num; })
    }

    return undefined;
};

const power = function(num, pow) {
	return Math.pow(num, pow);
};

const factorial = function(n) {
	if(n == 0) { return 1; }
  return factorial(n - 1) * n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
