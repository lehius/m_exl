import { ExcelComponent } from "@core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['change', 'input', 'click']
    })
  }
  toHTML() {
    /* html */
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
  onInput(event) {
    console.log(this.$root);
    console.log('Formula: onInput, text:', event.target.innerText.trim());
  }
}