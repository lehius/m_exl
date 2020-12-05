import { storage } from "@core/utils"
import { defaultStyles } from "@/constants"
import { defaultTitle } from "../constants"

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  title: defaultTitle,
  currentStyles: defaultStyles
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export const initialState = normalize(storage('excel-state')) || defaultState
