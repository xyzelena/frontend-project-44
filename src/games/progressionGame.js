import { getRandomMinMaxNum } from '../utils.js';
import playGame from '../index.js';

const task = 'What number is missing in the progression?';

const getProgression = (firstNum, step, lengthProgression) => {
  const progression = [firstNum];

  for (let i = 1; i < lengthProgression; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const progressionGame = () => {
  const firstNum = getRandomMinMaxNum(0, 5);
  const step = getRandomMinMaxNum(2, 5);
  const lengthProgression = getRandomMinMaxNum(5, 10);

  const progression = getProgression(firstNum, step, lengthProgression);

  const skipIndexValue = getRandomMinMaxNum(0, lengthProgression - 1);
  const trueAnswer = String(progression[skipIndexValue]);
  progression[skipIndexValue] = '..';

  const question = progression.join(' ');

  return [question, trueAnswer];
};

playGame(task, progressionGame);

export default progressionGame;
