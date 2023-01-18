
function getGeneration(cells, generations){
  for(let i = 0; i < generations; i++) {
    cells = crop(updateGrid(addBorder(cells)))
  }
  
  return cells;
}

// Function to count the number of live neighbors
function countLiveNeighbors(grid, row, col) {
  let count = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      const r = row + i;
      const c = col + j;
      if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
        count += grid[r][c];
      }
    }
  }
  return count;
}

// Function to update the grid based on the rules
function updateGrid(grid) {
  const newGrid = JSON.parse(JSON.stringify(grid));
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const liveNeighbors = countLiveNeighbors(grid, i, j);
      if (grid[i][j] === 1) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          newGrid[i][j] = 0;
        }
      } else {
        if (liveNeighbors === 3) {
          newGrid[i][j] = 1;
        }
      }
    }
  }
  return newGrid;
}

// Function to add a border of dead cells
function addBorder(grid) {
  const row = grid.length;
  const col = grid[0].length;
  const borderedGrid = new Array(row + 2);
  for (let i = 0; i < row + 2; i++) {
    borderedGrid[i] = new Array(col + 2);
    for (let j = 0; j < col + 2; j++) {
      if (i === 0 || i === row + 1 || j === 0 || j === col + 1) {
        borderedGrid[i][j] = 0; // set border cells to zero
      } else {
        borderedGrid[i][j] = grid[i - 1][j - 1];
      }
    }
  }
  return borderedGrid;
}

// Function to crop rows and columns of only dead cells
function crop(grid) {
  let rowStart = 0;
  let rowEnd = grid.length - 1;
  let colStart = 0;
  let colEnd = grid[0].length - 1;
  
  // Finding the first non-zero row
  while (rowStart <= rowEnd && !grid[rowStart].some(cell => cell !== 0)) {
    rowStart++;
  }
  
  // Finding the last non-zero row
  while (rowEnd >= rowStart && !grid[rowEnd].some(cell => cell !== 0)) {
    rowEnd--;
  }

  // Finding the first non-zero column
  while (colStart <= colEnd && grid.every(row => row[colStart] === 0)) {
    colStart++;
  }
  
  // Finding the last non-zero column
  while (colEnd >= colStart && grid.every(row => row[colEnd] === 0)) {
    colEnd--;
  }
  
  // Creating the cropped grid
  const croppedGrid = new Array(rowEnd - rowStart + 1);
  for (let i = 0; i < rowEnd - rowStart + 1; i++) {
    croppedGrid[i] = new Array(colEnd - colStart + 1);
    for (let j = 0; j < colEnd - colStart + 1; j++) {
      croppedGrid[i][j] = grid[i + rowStart][j + colStart];
    }
  }
  return croppedGrid;
}