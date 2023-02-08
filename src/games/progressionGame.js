import { playGame } from '../index.js';

const task = 'What number is missing in the progression?';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getSkipValue = (arrProgression) => {
  const arr = arrProgression.slice(0);
  const skipIndexValue = getRandom(0, arr.length - 1);
  const trueAnswer = arr[skipIndexValue];
  arr[skipIndexValue] = '..';
  return [arr, trueAnswer];
};

const progressionGame = () => {
  const firstNum = getRandom(0, 5);
  const step = getRandom(2, 5);
  const lengthProgression = getRandom(5, 10);

  const progression = [firstNum];

  for (let i = 1; i < lengthProgression; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  const skip = getSkipValue(progression);

  const question = skip[0].join(' ');

  const trueAnswer = String(skip[1]);

  const arrQuestionAnswer = [question, trueAnswer];

  return arrQuestionAnswer;
};

playGame(task, progressionGame);

export default progressionGame;
