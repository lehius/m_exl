import { $ } from "@core/dom"
export function resizeHandler(event, $root) {
  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resizer.data.resize
  let value

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = e.pageX - coords.right
      value = coords.width + delta
      $resizer.css({right: -delta + 'px'})
    } else {
      const delta = e.pageY - coords.bottom
      value = coords.height + delta
      $resizer.css({bottom: -delta + 'px'})
    }

  }
  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null
    if (type === 'col') {
      $parent.css({width: value + 'px'})
      $resizer.css({right: '0'})
      $root.findAll(`[data-col="${$parent.data.col}"]`)
        .forEach(cell => cell.style.width = value + 'px');
    } else {
      $resizer.css({bottom: '0'})
      $parent.css({height: value + 'px'})
      
    }
  }
}
