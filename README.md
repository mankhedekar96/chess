# Chess Piece Movement Calculator

This project contains a Node.js application that calculates possible movements for various chess pieces based on their current position on the chessboard.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)

## Prerequisites

- Ensure you have **Node.js** and **Yarn** installed on your machine.
- This project uses ECMAScript modules (ESM), so make sure you have a compatible version of Node.js (14 or higher recommended).

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mankhedekar96/chess-movement-calculator.git
   cd chess-movement-calculator
   ```

2. Install the necessary dependencies:

   ```bash
   yarn install
   ```

## Usage

To run the application, use the following command:

```bash
yarn start
```

You will be prompted to enter a chess piece along with its position (e.g., `Pawn,D2`). The application will output all possible positions that the specified piece can move to.

### Example Input

```
Please enter chess piece with position: Pawn,D2
Input: Pawn, D2
Output: D3
```

## Running Tests

To ensure the application works as expected, you can run the tests using Jest. Follow these steps:

1. Files should follow the naming convention `*.test.js` or `*.spec.js`.

2. To run the tests, use the following command:

   ```bash
   yarn test
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
