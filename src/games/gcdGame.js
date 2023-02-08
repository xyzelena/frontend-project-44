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

const getGcd = (arrayNum1, arrayNum2) => {
  const commonArray = [];

  for (let i = 0; i < arrayNum1.length; i += 1) {
    if (arrayNum2.includes(arrayNum1[i])) commonArray.push(arrayNum1[i]);
  }

  const result = commonArray[commonArray.length - 1];

  return result;
};

const gcdGame = () => {
  const num1 = Math.floor(Math.random() * 21 + 1);
  const num2 = Math.floor(Math.random() * 21 + 1);

  const question = `${num1} ${num2}`;

  const dividersArrayNum1 = getDividersNum(num1);
  const dividersArrayNum2 = getDividersNum(num2);

  const trueAnswer = String(getGcd(dividersArrayNum1, dividersArrayNum2));

  const arrQuestionAnswer = [question, trueAnswer];

  return arrQuestionAnswer;
};

playGame(task, gcdGame);

export default gcdGame;
