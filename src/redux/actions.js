import { CHANGE_TEXT, TABLE_RESIZE, CHANGE_TITLE, CHANGE_STYLES, APPLY_STYLES } from "./types";

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}
export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data
  }
}
export function changeTitle(text) {
  return {
    type: CHANGE_TITLE,
    data: text
  }
}
export function changeStyles(data) {
  return {
    type: CHANGE_STYLES,
    data
  }
}
export function applyStyles(data) {
  return {
    type: APPLY_STYLES,
    data
  }
}