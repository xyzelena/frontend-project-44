import greetingsUser from './cli.js';
import { playGame } from '../index.js';

const userName = greetingsUser();

const calcGame = () => {
  console.log('What is the result of the expression?');

  const mathSymbols = ['+', '-', '*'];

  let i = 0;

  do {
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);

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

    const result = playGame(userName, question, String(trueAnswer));

    if (result) i += 1;
    else return false;
  } while (i < 3);

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default calcGame;
