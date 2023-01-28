import { welcome } from './index.js';

const greetingsUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = welcome();
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greetingsUser;
