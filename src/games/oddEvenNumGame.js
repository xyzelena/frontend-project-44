import { getRandomNum } from '../utils.js';
import playGame from '../index.js';

const task = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (num) => ((num % 2 === 0));

const oddEvenNumGame = () => {
  const maxNum = 101;
  const question = getRandomNum(maxNum);

  const trueAnswer = isEven(question) === true ? 'yes' : 'no';

  return [question, trueAnswer];
};

playGame(task, oddEvenNumGame);

export default oddEvenNumGame;
