import greetingsUser from './cli.js';
import { playGame } from '../index.js';

const userName = greetingsUser();

const oddEvenNumGame = () => {
  const yes = 'yes';
  const no = 'no';
  console.log(`Answer "${yes}" if the number is even, otherwise answer "${no}".`);

  let i = 0;

  do {
    const question = Math.floor(Math.random() * 100);
    const trueAnswer = (question % 2 === 0) ? yes : no;
    const result = playGame(userName, question, trueAnswer);

    if (result) i += 1;
    else return false;
  } while (i < 3);
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default oddEvenNumGame;
