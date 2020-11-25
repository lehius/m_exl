const CODES = {
  A: 65,
  Z: 90
}

function toCell(cell = '') {
  /* html */
  return `
  <div class="cell" contenteditable>${cell}</div>
  `
}
function toColumn(col) {
  /* html */
  return `<div class="column">${col}</div>`
}
function createRow(content, index) {
  /* html */
  return `
  <div class="row">
    <div class="row-info">${index ? index : ''}</div>
    <div class="row-data">${content}</div>
  </div>
  `
}
function toChar (_, idx) {
  return String.fromCharCode(CODES.A + idx)
}
export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('')
    console.log(cols);

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')

    rows.push(createRow(cells, i+1))
  }

  return rows.join('')
}