import { getAllPossiblePositions } from './';

describe('getAllPossiblePositions', () => {
  test('should return correct positions for a Pawn', () => {
    const result = getAllPossiblePositions('Pawn', 'D2');
    expect(result).toEqual(['D3']);
  });

  test('should return correct positions for a King', () => {
    const result = getAllPossiblePositions('King', 'D4');
    expect(result).toEqual(expect.arrayContaining(['C3', 'D3', 'E3', 'C4', 'E4', 'C5', 'D5', 'E5']));
  });

  test('should return correct positions for a Queen', () => {
    const result = getAllPossiblePositions('Queen', 'D4');
    expect(result).toEqual(expect.arrayContaining(['C3', 'B2', 'A1', 'C4', 'B4', 'A4', 'C5', 'B6', 'A7', 'D3', 'D2', 'D1', 'D5', 'D6', 'D7', 'D8', 'E3', 'F2', 'G1', 'E4', 'F4', 'G4', 'H4', 'E5', 'F6', 'G7', 'H8']));
  });
});
