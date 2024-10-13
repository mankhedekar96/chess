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
    default:
      return [];
  }
};

export { getAllPossiblePositions };
