let row = 4;
let col = 5;

const getTable = (row, col) => {
  let table = [];
  for(let x = 0; x < row; x++){
    let rowResult = [];
    for(let y = 0; y < col; y++){
      rowResult.push(row * (y + 1) - (y % 2 ? x:row - x - 1));
    }
    table.push(rowResult);
  }
  return table;
}

console.log(getTable(row, col));