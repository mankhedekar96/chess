const xPositions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const yPositions = ['1', '2', '3', '4', '5', '6', '7', '8'];

const getVerticalForwardPositions = ({ x, y }, count) => {
  const result = [];
  for (let i = 1; i <= count && y + i < 8; i++) {
    result.push(`${xPositions[x]}${yPositions[y + i]}`);
  }
  return result;
};

const getVerticalBackwardPositions = ({ x, y }, count) => {
  const result = [];
  for (let i = 1; i <= count && y - i >= 0; i++) {
    result.push(`${xPositions[x]}${yPositions[y - i]}`);
  }
  return result;
};

const getHorizontalForwardPositions = ({ x, y }, count) => {
  const result = [];
  for (let i = 1; i <= count && x + i < 8; i++) {
    result.push(`${xPositions[x + i]}${yPositions[y]}`);
  }
  return result;
};

const getHorizontalBackwardPositions = ({ x, y }, count) => {
  const result = [];
  for (let i = 1; i <= count && x - i >= 0; i++) {
    result.push(`${xPositions[x - i]}${yPositions[y]}`);
  }
  return result;
};

const getDiagonalTopRightPositions = ({ x, y }, count) => {
  const result = [];
  for (let i = 1; i <= count && x + i < 8 && y + i < 8; i++) {
    result.push(`${xPositions[x + i]}${yPositions[y + i]}`);
  }
  return result;
};

const getDiagonalTopLeftPositions = ({ x, y }, count) => {
  const result = [];
  for (let i = 1; i <= count && x - i >= 0 && y + i < 8; i++) {
    result.push(`${xPositions[x - i]}${yPositions[y + i]}`);
  }
  return result;
};

const getDiagonalBottomRightPositions = ({ x, y }, count) => {
  const result = [];
  for (let i = 1; i <= count && x + i < 8 && y - i >= 0; i++) {
    result.push(`${xPositions[x + i]}${yPositions[y - i]}`);
  }
  return result;
};

const getDiagonalBottomLeftPositions = ({ x, y }, count) => {
  const result = [];
  for (let i = 1; i <= count && x - i >= 0 && y - i >= 0; i++) {
    result.push(`${xPositions[x - i]}${yPositions[y - i]}`);
  }
  return result;
};


const getVerticalForwardPositionsForKnight = ({ x, y }) => {
  const result = [];
  const yOffset = 2; // We are vertically moving upwards
  const xOffset = 1; // We are horizontally moving to the right or left

  if(y + yOffset < 8) {
    result.push(`${xPositions[x - xOffset]}${yPositions[y + yOffset]}`);
    result.push(`${xPositions[x + xOffset]}${yPositions[y + yOffset]}`);
  }
  return result;
};

const getVerticalBackwardPositionsForKnight = ({ x, y }) => {
  const result = [];
  if(y - 2 >= 1) {
    result.push(`${xPositions[x - 1]}${yPositions[y - 2]}`);
    result.push(`${xPositions[x + 1]}${yPositions[y - 2]}`);
  }
  return result;
};

const getHorizontalForwardPositionsForKnight = ({ x, y }) => {
  const result = [];
  if(x + 2 < 8) {
    result.push(`${xPositions[x + 2]}${yPositions[y - 1]}`);
    result.push(`${xPositions[x + 2]}${yPositions[y + 1]}`);
  }
  return result;
};

const getHorizontalBackwardPositionsForKnight = ({ x, y }) => {
  const result = [];
  if(x - 2 >= 1) {
    result.push(`${xPositions[x - 2]}${yPositions[y - 1]}`);
    result.push(`${xPositions[x - 2]}${yPositions[y + 1]}`);
  }
  return result;
};

const getAllPossiblePositions = (piece, position) => {
  const [horizontalPos, verticalPos] = position.split('');
  const horizontalPosition = xPositions.indexOf(horizontalPos);
  const verticalPosition = yPositions.indexOf(verticalPos);

  switch (piece) {
    case 'Pawn':
      return getVerticalForwardPositions({ x: horizontalPosition, y: verticalPosition }, 1);
    case 'King':
      return [
        ...getDiagonalBottomLeftPositions({ x: horizontalPosition, y: verticalPosition }, 1),
        ...getHorizontalBackwardPositions({ x: horizontalPosition, y: verticalPosition }, 1),
        ...getDiagonalTopLeftPositions({ x: horizontalPosition, y: verticalPosition }, 1),
        ...getVerticalBackwardPositions({ x: horizontalPosition, y: verticalPosition }, 1),
        ...getVerticalForwardPositions({ x: horizontalPosition, y: verticalPosition }, 1),
        ...getDiagonalBottomRightPositions({ x: horizontalPosition, y: verticalPosition }, 1),
        ...getHorizontalForwardPositions({ x: horizontalPosition, y: verticalPosition }, 1),
        ...getDiagonalTopRightPositions({ x: horizontalPosition, y: verticalPosition }, 1),
      ];
    case 'Queen':
      return [
        ...getDiagonalBottomLeftPositions({ x: horizontalPosition, y: verticalPosition }, 7),
        ...getHorizontalBackwardPositions({ x: horizontalPosition, y: verticalPosition }, 7),
        ...getDiagonalTopLeftPositions({ x: horizontalPosition, y: verticalPosition }, 7),
        ...getVerticalBackwardPositions({ x: horizontalPosition, y: verticalPosition }, 7),
        ...getVerticalForwardPositions({ x: horizontalPosition, y: verticalPosition }, 7),
        ...getDiagonalBottomRightPositions({ x: horizontalPosition, y: verticalPosition }, 7),
        ...getHorizontalForwardPositions({ x: horizontalPosition, y: verticalPosition }, 7),
        ...getDiagonalTopRightPositions({ x: horizontalPosition, y: verticalPosition }, 7),
      ];
    case 'Knight':
      return [
        ...getVerticalForwardPositionsForKnight({ x: horizontalPosition, y: verticalPosition }),
        ...getVerticalBackwardPositionsForKnight({ x: horizontalPosition, y: verticalPosition }),
        ...getHorizontalForwardPositionsForKnight({ x: horizontalPosition, y: verticalPosition }),
        ...getHorizontalBackwardPositionsForKnight({ x: horizontalPosition, y: verticalPosition }),
      ];
    default:
      return [];
  }
};

export { getAllPossiblePositions };
