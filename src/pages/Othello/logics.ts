import { getRandomInt } from "../../utils/getRandomInt"
import { BOARD_SIZE, initialGame } from "./models"
import { Board, Cell, CellNumber, Game } from "./type"

const directions = [
  { row: -1, col: -1},
  { row: -1, col: 0},
  { row: -1, col: 1},
  { row: 0, col: -1},
  { row: 0, col: 1},
  { row: 1, col: -1},
  { row: 1, col: 0},
  { row: 1, col: 1},
] as const

const updateCell = (cells: Board["cells"], row: CellNumber, col: CellNumber, cell: Cell): Board["cells"] => {
  let updated = cells
  updated[row][col] = cell
  return updated
}

export const startGame = (gameMode: Game["mode"], playerTurn?: "first" | "second"): Game => {
  const baseGame = updateCounts(updateCellValidity(initialGame))
  return {
    ...baseGame,
    mode: gameMode,
    status: "playing",
    playerTurn: playerTurn === "first" ? "black" : "white"
  }
}
export const finishGame = (game: Game): Game => {
  const { board: { counts: { black, white } } } = game
  const winner = black > white ? "black" : white > black ? "white" : "draw"
  return {
    ...game,
    winner,
    status: "ending"
  }
}

export const playStone = (game: Game, row: CellNumber, col: CellNumber): Game => {
  const played = updateCounts(flipStone(game, row, col))
  if(checkEndGame(played)) return finishGame(played)

  const switched = updateCellValidity(switchTurn(played))
  if(hasValidCell(switched)) return switched

  const skipped = updateCellValidity(switchTurn(switched))
  return hasValidCell(skipped) ? skipped : finishGame(skipped)
}

const updateCounts = (game: Game): Game => {
  const arr = new Array(BOARD_SIZE).fill("")
  const counts = arr.map((_, i) => game.board.cells[i].reduce((pre, cur) => {
    return {
      ...pre,
      [cur.stone]: pre[cur.stone] + 1
    }
    }, {
      black: 0,
      white: 0,
      empty: 0
    })
  ).reduce((pre, cur) => {
    return {
      black: pre.black + cur.black,
      white: pre.white + cur.white,
      empty: pre.empty + cur.empty
    }
  }, {
    black: 0,
    white: 0,
    empty: 0
  })

  return {
    ...game,
    board: {
      ...game.board,
      counts
    }
  }
}
const hasValidCell = (game: Game): boolean => {
  return game.board.cells.flat().some((cell) => cell.isValid)
}
const switchTurn = (game: Game): Game => {
  const nextPlayer = game.turn === "black" ? "white" : "black"
  return {
    ...game,
    turn: nextPlayer
  }
}

export const playStoneByAi = (game: Game): Game => {
  let selectedCellIsValid = false
  let selectedRow: CellNumber = 0
  let selectedCol: CellNumber = 0
  while (selectedCellIsValid === false) {
    selectedRow = getRandomInt(8) as CellNumber
    selectedCol = getRandomInt(8) as CellNumber
    const selectedCell = game.board.cells[selectedRow][selectedCol]
    selectedCellIsValid = selectedCell.stone === "empty" && selectedCell.isValid
  }
  return playStone(game, selectedRow, selectedCol)
}

const checkEndGame = (game: Game): boolean => game.board.counts.empty === 0
const isOnBoard = (row: number, col: number) => row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE

const flipStone = (game: Game, row: CellNumber, col: CellNumber): Game => {
  const { board: { cells } } = game
  let updatedCells = cells
  const ownColor = game.turn
  const opponentColor = game.turn === "black" ? "white" : "black"
  directions.forEach(direction => {
    let flipTargetCells: Pick<Cell, "col" | "row">[] = []
    let currentRow = row + direction.row as CellNumber
    let currentCol = col + direction.col as CellNumber

    // 盤面内で相手の石が続く限りループする
    while(isOnBoard(currentRow, currentCol) && cells[currentRow][currentCol].stone === opponentColor) {
      flipTargetCells.push({row: currentRow, col: currentCol})
      currentRow += direction.row;
      currentCol += direction.col;
    }

    // 盤面内で相手の石が続いた後のマスが自分の石であれば裏返す
    if(isOnBoard(currentRow, currentCol) && cells[currentRow][currentCol].stone === ownColor) {
      flipTargetCells.forEach(({row, col}) => {
        updatedCells = updateCell(updatedCells, row, col, {...updatedCells[row][col], stone: ownColor})
      })
    }
  })
  // 選択したマスにも自分の石をおく
  updatedCells[row][col] = {
    ...updatedCells[row][col],
    stone: ownColor
  }
  return {
    ...game,
    board: {
      ...game.board,
      cells: updatedCells
    }
  }
}

const updateCellValidity = (game: Game): Game => {
  const { board: { cells } } = game
  const ownColor = game.turn
  const opponentColor = game.turn === "black" ? "white" : "black"

  const updatedCells = cells.map((rowCells) => rowCells.map((cell) => {
    if (cell.stone !== "empty") return { ...cell, isValid: false }

    let isValid = false
    for (const direction of directions) {
      isValid = false
      let currentRow = cell.row + direction.row;
      let currentCol = cell.col + direction.col;
      let foundOpponent = false;

      while (isOnBoard(currentRow, currentCol) && cells[currentRow][currentCol].stone === opponentColor) {
        currentRow += direction.row;
        currentCol += direction.col;
        foundOpponent = true;
      }
      if (foundOpponent && isOnBoard(currentRow, currentCol) && cells[currentRow][currentCol].stone === ownColor) {
          isValid = true
          break
      }
    }
    return { ...cell, isValid }
  }))

  return {
    ...game,
    board: {
      ...game.board,
      cells: updatedCells
    }
  }
}