function delay() {
  for (let i = 0; i < 5000000000; i++);
}

function createBoard() {
  const topLine = '_________________________________________________\n';
  const squares = 
`|     |     |     |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|_____|_____|_____|_____|_____|_____|_____|_____|
`;

  let template = topLine + squares.repeat(8).trimEnd();
  const board = template.split('\n');
  for (let index = 0; index < board.length; index++) {
    board[index] = board[index].split("");
  }

  return board;
}

const BOARD = createBoard();

const pieces = {
  white: {
    king: "\u2654",
    queen: "\u2655",
    rook: "\u2656",
    bishop: "\u2657",
    knight: "\u2658",
    pawn: "\u2659"
  },
  black: {
    king: "\u265A",
    queen: "\u265B",
    rook: "\u265C",
    bishop: "\u265D",
    knight: "\u265E",
    pawn: "\u265F"
  }
};

const currentPlaces = {
  white: ['Rh1', 'Nh2', 'Bh3', 'Kh4', 'Qh5', 'Bh6', 'Nh7', 'Rh8',
   'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
  black: ['Ra1', 'Na2', 'Ba3', 'Ka4', 'Qa5', 'Ba6', 'Na7', 'Ra8',
   'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8']
}

function toggleColor(color) {
  return color === "\x1b[30m\x1b[47m" ? "\x1b[40m\x1b[37m" : "\x1b[30m\x1b[47m";
}

function displayBoard() {
  let string = '';
  let color = "\x1b[40m\x1b[37m";
  const resetColor = "\x1b[0m";

  for (let col = 0; col < BOARD[0].length; col++) {
    string += color + BOARD[0][col] + resetColor;
  }
  string += '\n';

  for (let row = 1; row < BOARD.length; row++) {
    color = (row - 1) % 3 === 0 ? toggleColor(color) : color;
    for (let col = 0; col < BOARD[row].length; col++) {
      color = (col % 6 === 0) && (col !== BOARD[row].length - 1) ? toggleColor(color) : color;
      string += col === BOARD[row].length - 1 || col === 0 ? "\x1b[40m\x1b[37m" : color;
      string += BOARD[row][col] + resetColor;
    }
    string += '\n';
  }

  console.log(string);
}

function rowInBoard(rowOfSqr) {
  return 2 + (rowOfSqr - 1) * 3;
}

function colInBoard(colOfSqr) {
  return 3 + (colOfSqr - 1) * 6;
}

function placePieceInSqr(square, piece) {
  const rowOfSqr = square[0];
  const colOfSqr = square[1];

  const row = rowInBoard(rowOfSqr);
  const col = colInBoard(colOfSqr);
  
  BOARD[row][col] = piece;
}

function findPiece(initial, side) {
  switch (initial) {
    case 'K' : return pieces[side]['king'];
    case 'Q' : return pieces[side]['queen'];
    case 'R' : return pieces[side]['rook'];
    case 'B' : return pieces[side]['bishop'];
    case 'N' : return pieces[side]['knight'];
    default : return pieces[side]['pawn'];
  }
}

function isPawn(initial) {
  return initial !== initial.toUpperCase();
}

function findRow(letter) {
  const squares = ' abcdefgh';
  return squares.indexOf(letter);
}

function placePieceInBoard(move, side) {
  let row = findRow(move[1]);
  let col = parseInt(move[2]);
  let initial = move[0];

  if (isPawn(move[0])) {
    row = findRow(move[0]);
    col = parseInt(move[1]);
    initial = "";
  }

  const piece = findPiece(initial, side);

  placePieceInSqr([row, col], piece);
}

function setUpTheBoard(side) {
  for (let index = 0; index < currentPlaces[side].length; index++) {
    placePieceInBoard(currentPlaces[side][index], side);
  }
}

setUpTheBoard('white');
setUpTheBoard('black');
console.clear();
displayBoard();

function clearOldMove(move) {
  const prevRow = findRow(move[1]);
  const prevCol = parseInt(move[2]);
  placePieceInSqr([prevRow, prevCol], " ");
}

function changeMove(initial, pieceNumber, side, move) {
  const prevPlaces = currentPlaces[side];
  let prevMoveIndex = 0;
  switch(initial) {
    case 'K' :
      prevMoveIndex = 3;
      break;
    case 'Q' :
      prevMoveIndex = 4;
      break;
    case 'R' :
      prevMoveIndex = pieceNumber === 1 ? 0 : 7;
      break;
    case 'N' :
      prevMoveIndex = pieceNumber === 1 ? 1 : 6;
      break;
    case 'B' :
      prevMoveIndex = pieceNumber === 1 ? 2 : 5;
      break;
  }
  const prevMove = prevPlaces[prevMoveIndex];
  prevPlaces[prevMoveIndex] = move;
  clearOldMove(prevMove);
}

function isAnythingInSqr(move) {
  const row = rowInBoard(findRow(move[1]));
  const col = colInBoard(+move[2]);
  if (BOARD[row][col] !== " ") return true;
  return false;
}

function isInValidPawnMove(pieceNumber, move, side) {
  return false;
  const currentMove = currentPlaces[side][7 + pieceNumber];
  const nextSqrIndex = findRow(currentMove[0]) + 1;
  const prevSqrIndex = findRow(currentMove[0]) - 1;
  if ((findRow(move[0]) !== nextSqrIndex && side === 'black') ||
  (findRow(move[0]) !== prevSqrIndex && side === 'white')) {
    return true;
  }
  
  if (currentMove[1] !== move[1]) {
    return true;
  }
  
  if (isAnythingInSqr("a" + move)) return true;
  
}

function isInValidKingMove(move, side) {
  const currentMove = currentPlaces[side][3];
  const currentRow = findRow(currentMove[1]);
  const currentCol = parseInt(currentMove[2]);

  const row = findRow(move[1]);
  const col = parseInt(move[2]);

  if (Math.abs(row - currentRow) > 1 ||
  Math.abs(col - currentCol) > 1 ||
  (Math.abs(col - currentCol) === 0 && Math.abs(row - currentRow) === 0) ||
  isAnythingInSqr(move)){
    console.log(row - currentRow)
    console.log(col - currentCol)
    return true;
  }

  return false;
}

function isSqrOccupied(currentRow, currentCol, nextRow, nextCol, rowIncrement, colIncrement) {
  let isOccupied = false;
  let row = currentRow;
  let col = currentCol;
  
  const sqaures = ' abcdefgh';
  while ((row !== nextRow || rowIncrement === 0) && (col !== nextCol || colIncrement === 0) && !isOccupied) {
    row += rowIncrement;
    col += colIncrement;
    const currentMove = ' ' + sqaures[row] + col;
    console.log(rowIncrement, colIncrement, currentMove)
    isOccupied = isAnythingInSqr(currentMove);
  }

  return isOccupied;
}

function isInValidBishopMove(pieceNumber, move, side) {
  const moveIndex = pieceNumber === 1 ? 2 : 5;
  const currentMove = currentPlaces[side][moveIndex];
  const currentRow = findRow(currentMove[1]);
  const currentCol = parseInt(currentMove[2]);
  console.log(currentRow, currentCol)

  const nextRow = findRow(move[1]);
  const nextCol = parseInt(move[2]);

  if (Math.abs(nextRow - currentRow) !== Math.abs(nextCol - currentCol)) return true;

  let rowIncrement = currentRow < nextRow ? 1 : -1;
  let colIncrement = currentCol < nextCol ? 1 : -1;

  return isSqrOccupied(currentRow, currentCol, nextRow, nextCol, rowIncrement, colIncrement);
}

function isInValidRookMove(pieceNumber, move, side) {
  const moveIndex = pieceNumber === 1 ? 0 : 7;
  const currentMove = currentPlaces[side][moveIndex];
  const currentRow = findRow(currentMove[1]);
  const currentCol = parseInt(currentMove[2]);
  console.log(currentRow, currentCol)

  const nextRow = findRow(move[1]);
  const nextCol = parseInt(move[2]);
  
  if (currentCol !== nextCol && currentRow !== nextRow) return true;

  let rowIncrement = currentRow > nextRow ? -1 : 1;
  let colIncrement = currentCol > nextCol ? -1 : 1;
  rowIncrement = currentRow === nextRow ? 0 : rowIncrement;
  colIncrement = currentCol === nextCol ? 0 : colIncrement;

  return isSqrOccupied(currentRow, currentCol, nextRow, nextCol, rowIncrement, colIncrement);
}

function isInValidMove(pieceNumber, move, side) {
  if (isPawn(move[0])) {
    return isInValidPawnMove(pieceNumber, move, side);
  }

  if (move[0] === 'K') {
    return isInValidKingMove(move, side);
  }

  if (move[0] === 'B') {
    return isInValidBishopMove(pieceNumber, move, side);
  }

  if (move[0] === 'R') {
    return isInValidRookMove(pieceNumber, move, side);
  }

  if (move[0] === 'Q') {
    
  }
}

function movePawn(side) {
  let pawn = 1;
  let pieceFound = false;
  let prevMove = currentPlaces[side][8];
  while (pawn < 8 && !pieceFound) {
    pieceFound = confirm("Is this piece ?");
    prevMove = currentPlaces[side][7+pawn];
    pawn++;
  }
  prevMove = pieceFound ? prevMove : currentPlaces[side][15];
  const prevRow = findRow(prevMove[0]);
  const prevCol = parseInt(prevMove[1]);
  const move = prompt("Enter move : ");

  if (isInValidMove(pawn - 1, move, side)) return -1;

  placePieceInSqr([prevRow, prevCol], " ");
  currentPlaces[side][6 + pawn] = move;
  placePieceInBoard(move, side);
}

function movePiece(piece, side) {
  const initial = piece[0];
  if (initial === 'P') return movePawn(side);
  let pieceFound = confirm("Is this piece ?");
  const pieceNumber =  pieceFound ? 1 : 2;
  console.log(pieceNumber)
  const move = prompt("Enter move : ");

  if (isInValidMove(pieceNumber, move, side)) return -1;

  changeMove(initial, pieceNumber, side, move);
  placePieceInBoard(move, side)
}

function isGameFinished() {
  return false;
}

function play() {
  let player = 1;
  while (!isGameFinished()) {
    player = player === 1 ? 0 : 1; 
    const side = player === 0 ? 'white' : 'black';
    const pieceType = prompt("Enter the name of the piece to move : ");
    const result = movePiece(pieceType.toUpperCase(), side);
    if (result === -1) {
      player = player === 1 ? 0 : 1; 
      console.log("Invalid Move bhAAi");
      continue;
    }
    console.clear()
    displayBoard();
  }
}

play()
