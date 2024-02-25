import { Board, Game } from "./type";

export const BOARD_SIZE = 8
const createInitialCells = () => {
  let cells: Board["cells"] = new Array(BOARD_SIZE).fill({}).map((_, row) => new Array(8).fill({}).map((_, col) => ({
    row,
    col,
    stone: "empty",
    isValid: false
  }))) as Board["cells"]

  cells[3][4] = {
    ...cells[3][4],
    stone: "black",
  }
  cells[4][3] = {
    ...cells[4][3],
    stone: "black",
  }
  cells[3][3] = {
    ...cells[3][3],
    stone: "white",
  }
  cells[4][4] = {
    ...cells[4][4],
    stone: "white",
  }
  return cells
}

const initialBoard: Board = {
  cells: createInitialCells(),
  counts: {
    black: 0,
    white: 0,
    empty: 8 * 8
  }
} as const

export const initialGame: Game = {
  mode: "ai",
  playerTurn: "black",
  winner: null,
  status: "beforePlay",
  turn: "black",
  board: initialBoard
} as const
