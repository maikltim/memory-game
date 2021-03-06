import * as React from "react"

// LOGIC ===========================================================================================
export enum Status {
  Open, Closed, Done, Failed
}

export type Cell = {
  symbol : string
  status : Status
}

export type PredFn = (cell : Cell) => boolean

export let isOpen = (cell : Cell) : boolean => (
  cell.status == Status.Open
)

export let isClosed = (cell : Cell) : boolean => (
  cell.status == Status.Closed
)

export let isDone = (cell : Cell) : boolean => (
  cell.status == Status.Done
)

export let isFailed = (cell : Cell) : boolean  => (
  cell.status == Status.Failed
)

export let isBlocking = (cell : Cell) : boolean => (
  isOpen(cell) || isFailed(cell)
)

// VIEW ============================================================================================
type CellViewProps = {
  cell : Cell,
  onClick : (event : React.MouseEvent) => void,
}

export let CellView : React.FC<CellViewProps> = ({cell, onClick}) => {
  let {status, symbol} = cell
  return <>
    <div className="cell" onClick={onClick}>
      {status == Status.Closed ? "" : symbol}
    </div>
    <style jsx>{`
      .cell {   
        font-size: 4rem;
        background: gray;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100px;
        background: grey;
        cursor: ${status == Status.Closed ? "pointer" : "auto"};
      }
    `}</style>
  </>
}