import { getRandomNum } from '../utils.js';
import { playGame } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (a === 0 ? b : gcd(b % a, a));

const gcdGame = () => {
  const maxNum = 21;
  const num1 = getRandomNum(maxNum);
  const num2 = getRandomNum(maxNum);

  const question = `${num1} ${num2}`;

  const trueAnswer = String(gcd(num1, num2));

  return [question, trueAnswer];
};

playGame(task, gcdGame);

export default gcdGame;
