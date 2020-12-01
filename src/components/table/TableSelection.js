export class TableSelection {
  static classNameSelected = 'selected'
  static classNameSelectedGroup = 'selected-group'
  constructor() {
    this.group = []
    this.current = null
  }
  select($el) {
    this.clear()
    this.current = $el
    this.group.push($el)
    $el.focus().addClass(TableSelection.classNameSelected)
  }

  clear() {
    if (this.current) {
      this.current.removeClass(TableSelection.classNameSelected)
    }
    this.group.forEach($el => $el.removeClass(TableSelection.classNameSelectedGroup))
    this.group = []
  }
  selectGroup($group = []) {
    this.clear()

    this.select(this.current)

    this.group = $group
    this.group.forEach($el => $el.addClass('selected-group'))

  }
}