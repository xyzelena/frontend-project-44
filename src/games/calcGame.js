import { getRandomNum } from '../utils.js';
import { playGame } from '../index.js';

const task = 'What is the result of the expression?';

const doCalc = (num1, num2, mathSymbol) => {
  switch (mathSymbol) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      console.log('Some problem with math symbols.');
  }
};

const calcGame = () => {
  const maxNum = 11;
  const num1 = getRandomNum(maxNum);
  const num2 = getRandomNum(maxNum);

  const mathSymbols = ['+', '-', '*'];
  const indexMathSymbol = getRandomNum(mathSymbols.length);

  const question = `${num1} ${mathSymbols[indexMathSymbol]} ${num2}`;

  const trueAnswer = String(doCalc(num1, num2, mathSymbols[indexMathSymbol]));

  return [question, trueAnswer];
};

playGame(task, calcGame);

export default calcGame;
