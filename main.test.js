const {
  ageToAbilities,
  oddIndices,
  numOddValues,
  averageStringLength,
  lastPunctuationIndex,
  incrementalCount,
  multiplicationTable
} = require('./main.js');

describe('ageToAbilities', () => {

  it('returns a proper message for kids', () => {
    expect(ageToAbilities(0)).toBe('You can\'t drive.');
    expect(ageToAbilities(5)).toBe('You can\'t drive.');
    expect(ageToAbilities(15)).toBe('You can\'t drive.');
  });

  it('returns a proper message for young drivers', () => {
    expect(ageToAbilities(16)).toBe('You can drive but not vote.');
    expect(ageToAbilities(17)).toBe('You can drive but not vote.');
  });

  it('returns a proper message for young voters', () => {
    expect(ageToAbilities(18)).toBe('You can vote but not rent a car.');
    expect(ageToAbilities(20)).toBe('You can vote but not rent a car.');
    expect(ageToAbilities(23)).toBe('You can vote but not rent a car.');
    expect(ageToAbilities(24)).toBe('You can vote but not rent a car.');
  });

  it('returns a proper message for 25+ year olds', () => {
    expect(ageToAbilities(25)).toBe('You can do pretty much anything.');
    expect(ageToAbilities(50)).toBe('You can do pretty much anything.');
    expect(ageToAbilities(100)).toBe('You can do pretty much anything.');
  });
});

describe('oddIndices', () => {

  it('returns the values at odd indices for non-empty arrays', () => {
    expect(oddIndices([0, 2, 4, 6, 8, 10])).toStrictEqual([2, 6, 10]);
    expect(oddIndices([1, 2, 3, 2, 4, 7])).toStrictEqual([2, 2, 7]);
    expect(oddIndices([1, 1, 1, 1, 1, 1])).toStrictEqual([1, 1, 1]);
    expect(oddIndices([2, 2, 2, 2, 2, 2])).toStrictEqual([2, 2, 2]);
  });

  it('returns the values at odd indices for single value arrays', () => {
    expect(oddIndices([0])).toStrictEqual([]);
    expect(oddIndices([1])).toStrictEqual([]);
    expect(oddIndices([2])).toStrictEqual([]);
  });

  it('returns the values at odd indices for empty arrays', () => {
    expect(oddIndices([])).toStrictEqual([]);
    expect(oddIndices([])).toStrictEqual([]);
    expect(oddIndices([])).toStrictEqual([]);
  });
});

describe('numOddValues', () => {

  it('should count odds when only odds are present', () => {
    expect(numOddValues([1, 3, 5])).toBe(3);
    expect(numOddValues([1])).toBe(1);
    expect(numOddValues([9, 9, 9, 11, 13])).toBe(5);
  });

  it('should count odds when only evens are present', () => {
    expect(numOddValues([2, 4, 6])).toBe(0);
    expect(numOddValues([0])).toBe(0);
    expect(numOddValues([8, 8, 8, 10, 12])).toBe(0);
  });

  it('should count odds when odds and evens are present', () => {
    expect(numOddValues([1, 4, 3])).toBe(2);
    expect(numOddValues([0, 1])).toBe(1);
    expect(numOddValues([9, 8, 7, 5, 12])).toBe(3);
  });

  it('should count odds in an empty array', () => {
    expect(numOddValues([])).toBe(0);
  });
});

describe('averageStringLength', () => {

  it('should get the average string length', () => {
    expect(averageStringLength(['oh', 'hello', 'there'])).toBe(4);
    expect(averageStringLength(['oh'])).toBe(2);
    expect(averageStringLength(['best', 'test', 'ever!!!'])).toBe(5);
  });

  it('should get the average string length when the average is a decimal', () => {
    expect(averageStringLength(['oh', 'hello'])).toBe(3.5);
    expect(averageStringLength(['i', 'am'])).toBe(1.5);
  });

  it('should return 0 if the array is empty', () => {
    expect(averageStringLength([])).toBe(0);
  });
});

describe('lastPunctuationIndex', () => {

  it('should return the index of the last punctuation', () => {
    expect(lastPunctuationIndex('!')).toBe(0);
    expect(lastPunctuationIndex('wow!')).toBe(3);
    expect(lastPunctuationIndex('wow! that is so crazy')).toBe(3);
    expect(lastPunctuationIndex('wow? that is so crazy')).toBe(3);
    expect(lastPunctuationIndex('wow that is so crazy.')).toBe(20);
  });

  it('should return the index of the last punctuation (when multiple are present)', () => {
    expect(lastPunctuationIndex('wow? that is so crazy!!!!')).toBe(24);
    expect(lastPunctuationIndex('wow that is so crazy....')).toBe(23);
    expect(lastPunctuationIndex('wow. that? is! so. crazy')).toBe(17);
  });

  it('should return -1 if no punctuation was found', () => {
    expect(lastPunctuationIndex('wow that is so crazy')).toBe(-1);
    expect(lastPunctuationIndex('')).toBe(-1);
  });
});

describe('incrementalCount', () => {

  it('should be able to count by ones', () => {
    expect(incrementalCount(5, 10, 1)).toStrictEqual([5, 6, 7, 8, 9, 10]);
    expect(incrementalCount(1, 3, 1)).toStrictEqual([1, 2, 3]);
    expect(incrementalCount(20, 23, 1)).toStrictEqual([20, 21, 22, 23]);
  });

  it('should be able to count by values greater than one', () => {
    expect(incrementalCount(5, 11, 2)).toStrictEqual([5, 7, 9, 11]);
    expect(incrementalCount(5, 17, 4)).toStrictEqual([5, 9, 13, 17]);
    expect(incrementalCount(10, 30, 10)).toStrictEqual([10, 20, 30]);
  });

  it('should be able to count by negative numbers', () => {
    expect(incrementalCount(30, 10, -10)).toStrictEqual([30, 20, 10]);
    expect(incrementalCount(10, 4, -1)).toStrictEqual([10, 9, 8, 7, 6, 5, 4]);
  });

  it('should be able to count by zeroes if the start number is equal to the end number', () => {
    expect(incrementalCount(10, 10, 1)).toStrictEqual([10]);
    expect(incrementalCount(100, 100, 1)).toStrictEqual([100]);
    expect(incrementalCount(0, 0, 1)).toStrictEqual([0]);
  });
});

describe('multiplicationTable', () => {
  it('can create a multiplication table', () => {
    expect(multiplicationTable(10, 10)).toStrictEqual([[0,0,0,0,0,0,0,0,0,0],[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,10,12,14,16,18],[0,3,6,9,12,15,18,21,24,27],[0,4,8,12,16,20,24,28,32,36],[0,5,10,15,20,25,30,35,40,45],[0,6,12,18,24,30,36,42,48,54],[0,7,14,21,28,35,42,49,56,63],[0,8,16,24,32,40,48,56,64,72],[0,9,18,27,36,45,54,63,72,81]]);
    expect(multiplicationTable(10, 20)).toStrictEqual([[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38],[0,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57],[0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76],[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95],[0,6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114],[0,7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133],[0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152],[0,9,18,27,36,45,54,63,72,81,90,99,108,117,126,135,144,153,162,171]]);
  });
});