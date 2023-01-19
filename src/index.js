
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix == [] || matrix == undefined){
        return [];
    }
    let resArr = [];
    for(let i = 0; i < matrix.length; i++){
      if(i%2 != 0){
        matrix[i] = matrix[i].reverse();
      }
      for(let j = 0; j < matrix[i].length; j++){
        resArr.push(matrix[i][j])
      }
    } return resArr;
}
