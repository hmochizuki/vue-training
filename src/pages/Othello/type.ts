type StoneColor = "white" | "black"

export type Game = {
  mode: GameMode
  playerTurn: StoneColor
  winner: StoneColor | "draw" |null
  status: "beforePlay" | "playing" | "ending"
  board: Board
  turn: StoneColor
}


export type Board = {
  cells: Cell[][]
  counts: Record<StoneColor| "empty", number>
}

export type Cell = {
  stone: "white" | "black" | "empty"
  row: CellNumber
  col: CellNumber
  isValid: boolean
}

export type CellNumber = 0|1|2|3|4|5|6|7
type GameMode = "player" | "ai"