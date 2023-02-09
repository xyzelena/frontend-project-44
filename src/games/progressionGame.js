import { getRandomMinMaxNum } from '../utils.js';
import playGame from '../index.js';

const task = 'What number is missing in the progression?';

const getSkipValue = (progression) => {
  const pr = progression.slice(0);
  const skipIndexValue = getRandomMinMaxNum(0, pr.length - 1);
  const trueAnswer = pr[skipIndexValue];
  pr[skipIndexValue] = '..';
  return [pr, trueAnswer];
};

const progressionGame = () => {
  const firstNum = getRandomMinMaxNum(0, 5);
  const step = getRandomMinMaxNum(2, 5);
  const lengthProgression = getRandomMinMaxNum(5, 10);

  const progression = [firstNum];

  for (let i = 1; i < lengthProgression; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  const skip = getSkipValue(progression);

  const question = skip[0].join(' ');

  const trueAnswer = String(skip[1]);

  return [question, trueAnswer];
};

playGame(task, progressionGame);

export default progressionGame;
