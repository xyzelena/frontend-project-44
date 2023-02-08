import { playGame } from '../index.js';

const yes = 'yes';
const no = 'no';
const task = `Answer "${yes}" if given number is prime. Otherwise answer "${no}".`;

const getAnswer = (question) => {
  if (question <= 1) return no;
  if (question === 2) return yes;

  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) return no;
  }

  return yes;
};

const primeNumGame = () => {
  const maxNum = 25;
  const question = Math.floor(Math.random() * maxNum);

  const trueAnswer = getAnswer(question);

  const arrQuestionAnswer = [question, trueAnswer];

  return arrQuestionAnswer;
};

playGame(task, primeNumGame);

export default primeNumGame;
