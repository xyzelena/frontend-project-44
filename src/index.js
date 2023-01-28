import readlineSync from 'readline-sync';

export const welcome = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const playGame = (userName, arrQuestionAnswer) => {
  let i = 0;

  do {
    const [question, trueAnswer] = arrQuestionAnswer();
    const userAnswer = getAnswer(question);

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  } while (i < 3);

  console.log(`Congratulations, ${userName}!`);
  return true;
};
