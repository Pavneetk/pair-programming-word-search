const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'L', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'F', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'L', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if the word is not present vertically", function() {
    const result = wordSearch([
      ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'l', 'L', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'F', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'L', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isFalse(result);
  });

  it("should return true if the word is present vertically backwards", function() {
    const result = wordSearch([
      ['A', 'S', 'D', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'l', 'L', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'I', 'E', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'F', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'F', 'N', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'I', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'L', 'E', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'S', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
  it("should return true if the word is present Horizontally backwards", function() {
    const result = wordSearch([
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['S', 'l', 'L', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'I', 'E', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'F', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'F', 'N', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'E', 'I', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'L', 'E', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'E', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  
});
