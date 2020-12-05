import { defaultStyles } from "../../constants"
import { parse } from "@core/parse"
import { toInlineStyles } from "../../core/utils"

const CODES = {
  A: 65,
  Z: 90
}
const DEFAUL_WIDTH = 120,
      DEFAULT_HEIGHT = 24

function getWidth(state, idx) {
  return (state[idx] || DEFAUL_WIDTH) + 'px'
}
function getHeight(state = {}, idx) {
  return (state[idx] || DEFAULT_HEIGHT) + 'px'
}

function toCell(state, row) {
  return function(_, col) {
    const id = `${row}:${col}`
    const data = state.dataState[id] ? state.dataState[id] : ''
    const style = toInlineStyles({
      ...defaultStyles,
      ...state.stylesState[id]
    })
    /* html */
    return `
      <div
        class="cell"
        contenteditable
        data-type="cell"
        data-col="${col}"
        data-id="${id}"
        data-value="${data || ''}"
        style="${style} width:${getWidth(state.colState, col)}"
        >${parse(data)}</div>
    `
  }
}
function toColumn({col, idx, width}) {
  /* html */
  return `<div class="column" data-type="resizable" data-col="${idx}" style="width:${width};">
            ${col}
            <div class="col-resize" data-resize="col"></div>
          </div>`
}
function createRow(idx, content, state) {
  const resizer = idx ? '<div class="row-resize" data-resize="row"></div>' : ''
  /* html */
  return `
  <div class="row" data-type="resizable" data-row="${idx ? idx : 0}" style="height:${getHeight(state, idx)}">
    <div class="row-info">${idx ? idx : ''}
      ${resizer}
    </div>
    <div class="row-data">${content}</div>
  </div>
  `
}
function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx)
}
function widthFrom(state) {
  return function(col, idx) {
    return {
      col, idx, width: getWidth(state, idx)
    }
  }
}
export function createTable(rowsCount = 20, state = {}) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(widthFrom(state.colState))
    .map(toColumn)
    .join('')

  rows.push(createRow(null, cols, {}))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell(state, row))
      .join('')

    rows.push(createRow(row+1, cells, state.rowState))
  }

  return rows.join('')
}