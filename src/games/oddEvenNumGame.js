import greetingsUser from './cli.js';
import { playGame } from '../index.js';

import {cons} from '@hexlet/pairs';

const userName = greetingsUser();

const yes = 'yes';
const no = 'no';
console.log(`Answer "${yes}" if the number is even, otherwise answer "${no}".`);

const oddEvenNumGame = () => {

  const question = Math.floor(Math.random() * 101);
  const trueAnswer = (question % 2 === 0) ? yes : no;

  const pair = cons(question,trueAnswer); 
  
  return pair;
};

playGame(userName, oddEvenNumGame());

export default oddEvenNumGame;
