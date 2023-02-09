import { getRandomNum } from '../utils.js';
import { playGame } from '../index.js';

const yes = 'yes';
const no = 'no';
const task = `Answer "${yes}" if the number is even, otherwise answer "${no}".`;

const oddEvenNumGame = () => {
  const maxNum = 101;
  const question = getRandomNum(maxNum);
  const trueAnswer = (question % 2 === 0) ? yes : no;

  return [question, trueAnswer];
};

playGame(task, oddEvenNumGame);

export default oddEvenNumGame;
