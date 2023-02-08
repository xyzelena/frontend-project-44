import { getRandomNum } from '../utils.js';
import { playGame } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getDividersNum = (num) => {
  const result = [];

  if (num === 0 || num === 1) {
    result.push(num);
    return result;
  }

  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) result.push(i);
  }

  return result;
};

const getGcd = (numbers_1, numbers_2) => {
  const commonNumbers = [];

  for (let i = 0; i < numbers_1.length; i += 1) {
    if (numbers_2.includes(numbers_1[i])) commonNumbers.push(numbers_1[i]);
  }

  const result = commonNumbers[commonNumbers.length - 1];

  return result;
};

const gcdGame = () => {
  const maxNum = 21; 
  const num1 = getRandomNum(maxNum) + 1;
  const num2 = getRandomNum(maxNum) + 1;

  const question = `${num1} ${num2}`;

  const dividersNum_1 = getDividersNum(num1);
  const dividersNum_2 = getDividersNum(num2);

  const trueAnswer = String(getGcd(dividersNum_1, dividersNum_2));

  return [question, trueAnswer];
};

playGame(task, gcdGame);

export default gcdGame;
