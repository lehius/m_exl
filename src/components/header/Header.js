import { ExcelComponent } from "@core/ExcelComponent";
import { $ } from "@core/dom";
import * as actions from "@/redux/actions";
import { defaultTitle } from "@/constants";
import { debounce } from "../../core/utils";

export class Header extends ExcelComponent {
  static className = 'excel__header'
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }
  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }
  toHTML() {
    const title = this.store.getState().title || defaultTitle
    /* html */
    return ` 
    <input type="text" class="input" value="${title}">
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
  onInput(event) {
    this.$dispatch(actions.changeTitle($(event.target).text()))
  }
}