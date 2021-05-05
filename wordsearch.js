const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    const verticalJoinReverse = transpose(letters).map(ls => ls.reverse().join(''))
    for (l of verticalJoinReverse) {
        if (l.includes(word)) return true;
    }
    const horizontalJoinReverse = letters.map(ls => ls.reverse().join(''))
    for (l of horizontalJoinReverse) {
        if (l.includes(word)) return true;
    }

    return false;

}

module.exports = wordSearch

const transpose = function(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let newRows = [];
      for (let indexOfMatrix in matrix) {
        newRows.push(matrix[indexOfMatrix][i]);
      }
      result.push(newRows);
    }
    // console.log(result);
    return result;
  };

