import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const task = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const getAnswer = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const primeNumGame = () => {
  const maxNum = 25;
  const question = getRandomNum(maxNum);

  const trueAnswer = getAnswer(question) === true ? 'yes' : 'no';

  return [question, trueAnswer];
};

playGame(task, primeNumGame);

export default primeNumGame;
