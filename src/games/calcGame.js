import { getRandomNum } from '../utils.js';
import { playGame } from '../index.js';

const task = 'What is the result of the expression?';

const calcGame = () => {
  const maxNum = 11; 
  const num1 = getRandomNum(maxNum);
  const num2 = getRandomNum(maxNum);

  const mathSymbols = ['+', '-', '*'];
  const indexMathSymbol = getRandomNum(mathSymbols.length);

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

  return [question, trueAnswer];
};

playGame(task, calcGame);

export default calcGame;
