import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const playGame = (task, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  let i = 0;

  do {
    const [question, trueAnswer] = questionAnswer();
    const userAnswer = getAnswer(question);

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  } while (i < ROUNDS_COUNT);

  console.log(`Congratulations, ${userName}!`);

  return true;
};

export default playGame;
