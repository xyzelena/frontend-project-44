import readlineSync from 'readline-sync';

export const welcome = () => {
 const userName = readlineSync.question('May I have your name? ');
 return userName; 
}  

