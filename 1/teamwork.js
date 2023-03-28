const row = 4;
const col = 5;
let numbers = [];

for (let x = 0; x < row; x++) {
  numbers.push([]);
}

let count = 1;
for (let x = 0; x < col; x++) {
  if (x % 2 == 0) {
    for (let y = 0; y < row; y++) {
      numbers[y][x] = count;
      count++;
    }
  } else {
    for (let y = row - 1; y >= 0; y--) {
      numbers[y][x] = count;
      count++;
    }
  }
}
console.log(numbers);
