import { playGame } from '../index.js';

const yes = 'yes';
const no = 'no';
const task = `Answer "${yes}" if the number is even, otherwise answer "${no}".`;

const oddEvenNumGame = () => {
  const question = Math.floor(Math.random() * 101);
  const trueAnswer = (question % 2 === 0) ? yes : no;

  const arrQuestionAnswer = [question, trueAnswer];

  return arrQuestionAnswer;
};

playGame(task, oddEvenNumGame);

export default oddEvenNumGame;
