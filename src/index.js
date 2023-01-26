import readlineSync from 'readline-sync';

export const welcome = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName; 
}


export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;  
};

export const playGame = (userName, question, trueAnswer) => {     
    const userAnswer = getAnswer(question);
    
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    } 
return true;
}; 
