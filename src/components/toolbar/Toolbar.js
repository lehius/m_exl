import { ExcelComponent } from "@core/ExcelComponent";

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'
  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    })
  }
  toHTML() {
    /* html */
    return `
      <div class="button">
        <li class="material-icons">format_align_left</li>
      </div>
      <div class="button">
        <li class="material-icons">format_align_center</li>
      </div>
      <div class="button">
        <li class="material-icons">format_align_right</li>
      </div>
      <div class="button">
        <li class="material-icons">format_bold</li>
      </div>
      <div class="button">
        <li class="material-icons">format_italic</li>
      </div>
      <div class="button">
        <li class="material-icons">format_underline</li>
      </div>
    `
  }
  onClick(event) {
    console.log(event.target);
  }

}