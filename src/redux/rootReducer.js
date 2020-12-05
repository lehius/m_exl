import { toInlineStyles } from "../core/utils"
import { APPLY_STYLES, CHANGE_STYLES, CHANGE_TEXT, CHANGE_TITLE, TABLE_RESIZE } from "./types"

export function rootReducer(state, action) {
  let field,
      val
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      return {...state, [field]: value(state, field, action)} //id, value
    case CHANGE_TEXT:
      field = 'dataState'
      return {
        ...state,
        currentText: action.data.value,
        dataState: value(state, field, action)
      }
    case CHANGE_TITLE:
      return {...state, title: action.data}
    case CHANGE_STYLES:
      return {...state, currentStyles: action.data}
    case APPLY_STYLES: 
      field = 'stylesState'
      val = state[field] || {}
      action.data.ids.forEach(id => {
        val[id] = {...val[id], ...action.data.value}
      });
      return {
        ...state,
        [field]: val,
        currentStyles: {...state.currentStyles,...action.data.value}
      }
  default: return state
  }
}

function value(state, field, action) {
  const result = state[field] || {}
  result[action.data.id] = action.data.value
  return result
}