import greetingsUser from './cli.js';
import { playGame } from '../index.js';

const userName = greetingsUser();

console.log('What is the result of the expression?');

const calcGame = () => {
  const num1 = Math.floor(Math.random() * 11);
  const num2 = Math.floor(Math.random() * 11);

  const mathSymbols = ['+', '-', '*'];
  const indexMathSymbol = Math.floor(Math.random() * 3);

  const question = `${num1} ${mathSymbols[indexMathSymbol]} ${num2}`;

  let trueAnswer = 0;

  switch (mathSymbols[indexMathSymbol]) {
    case '+':
      trueAnswer = num1 + num2;
      break;
    case '-':
      trueAnswer = num1 - num2;
      break;
    case '*':
      trueAnswer = num1 * num2;
      break;
    default:
      console.log('Some problem with math symbols.');
  }

  trueAnswer = String(trueAnswer);

  const arrQuestionAnswer = [question, trueAnswer];

  return arrQuestionAnswer;
};

playGame(userName, calcGame);

export default calcGame;
