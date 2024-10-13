import readline from 'readline';
import { getAllPossiblePositions } from './chess/index.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askUser = () => {
  rl.question('Please enter chess piece with position: ', (input) => {
    console.log(`Input: ${input}`);
    const [piece, position] = input.split(',').map(str => str.trim());

    const possiblePositions = getAllPossiblePositions(piece, position);

    console.log(`Output: ${possiblePositions.join(', ')}`);

    rl.question('Would you like to enter another input? (yes/no): ', (answer) => {
      if (answer.toLowerCase() === 'yes') {
        askUser();
      } else {
        console.log('Goodbye!');
        rl.close();
      }
    });
  });
};

askUser();
