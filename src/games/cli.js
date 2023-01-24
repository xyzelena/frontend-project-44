import {welcome} from '../index.js';

export const greetingsUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName =  welcome (); 
  console.log(`Hello, ${userName}!`);
  return userName;
};  
