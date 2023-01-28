import greetingsUser from '../cli.js';
import { playGame } from '../index.js';

const userName = greetingsUser();

const yes = 'yes';
const no = 'no';
console.log(`Answer "${yes}" if the number is even, otherwise answer "${no}".`);

const oddEvenNumGame = () => {
  const question = Math.floor(Math.random() * 101);
  const trueAnswer = (question % 2 === 0) ? yes : no;

  const arrQuestionAnswer = [question, trueAnswer];

  return arrQuestionAnswer;
};

playGame(userName, oddEvenNumGame);

export default oddEvenNumGame;
