import readlineSync from 'readline-sync';

import greetingsUser from './cli.js';

const userName = greetingsUser();

const oddEvenNumGame = () => {
  const yes = 'yes';
  const no = 'no';
  console.log(`Answer "${yes}" if the number is even, otherwise answer "${no}".`);

  let i = 0;

  do {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);

    const correctAnswer = (randomNum % 2 === 0) ? yes : no;

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  } while (i < 3);
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default oddEvenNumGame;
