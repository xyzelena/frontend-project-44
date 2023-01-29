import greetingsUser from '../cli.js';
import { playGame } from '../index.js';

const userName = greetingsUser();

console.log('What number is missing in the progression?');

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getSkipValue = (array) => {
  const skipIndexValue = getRandom(0, array.length - 1);
  const trueAnswer = array[skipIndexValue];
  array[skipIndexValue] = '..';
  return [array, trueAnswer]; 
};

const progressionGame = () => {
  const firstNum = getRandom(0,5);
  const step = getRandom(2,5);
  const lengthProgression = getRandom(5,10);
  
  const progression = [firstNum];

  for(let i = 1; i < lengthProgression; i += 1){
     progression[i] = progression[i-1] + step;
}

  const skip = getSkipValue(progression);

  const question = skip[0].join(' ');

  const trueAnswer = String(skip[1]);

  const arrQuestionAnswer = [question, trueAnswer];

  return arrQuestionAnswer;
};

playGame(userName, progressionGame);

export default progressionGame;
