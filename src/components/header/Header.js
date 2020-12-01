import { ExcelComponent } from "@core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = 'excel__header'
  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    })
  }
  toHTML() {
    /* html */
    return ` 
    <input type="text" class="input" value="Новая таблица">
    <div>
      <div class="button">
        <li class="material-icons">delete</li>
      </div>
      <div class="button">
        <li class="material-icons">exit_to_app</li>
      </div>
    </div>
    `
  }
}