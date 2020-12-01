function shouldResize(event) {
  return event.target.dataset.resize
}
function isCell(event) {
  return event.target.dataset.type === 'cell'
}

function range(start, end) {
  if (start > end) {
    [end, start] = [start, end]
  }
  return Array(end - start + 1)
    .fill('')
    .map((_, index) => start + index)
}

function matrix($target, $current, $root) {
  const target = $target.id(true)
  const current = $current.id(true)
  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)
  return rows.reduce((acc, row) => {
    cols.forEach(col => acc.push($root.find(`[data-id="${row}:${col}"]`)))
    return acc
  }, [])
}

function nextSelector(key, {row,col}) {
  const MIN_VALUE = 0
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break
    case 'Tab':
    case 'ArrowRight':
      col++
      break
    case 'ArrowLeft':
      if (col > MIN_VALUE) {
        col--
      }
      break
    case 'ArrowUp':
      if (row > MIN_VALUE) {
        row--
      }
      break
  }
  return `[data-id="${row}:${col}"]`
}

export {shouldResize, isCell, range, matrix, nextSelector}