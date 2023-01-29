import greetingsUser from '../cli.js';
import { playGame } from '../index.js';

const userName = greetingsUser();

const yes = 'yes';
const no = 'no';
console.log(`Answer "${yes}" if given number is prime. Otherwise answer  "${no}".`);

const getAnswer = (question) => {
  if(question <= 1) return no;
  else if(question === 2) return yes; 
  else {
    for(let i = 2; i < question; i += 1){
       if(question % i === 0) return no;
}
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

playGame(userName, primeNumGame);

export default primeNumGame;
