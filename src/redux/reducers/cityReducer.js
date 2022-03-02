import React from 'react'
import { GET_CITIES, } from '../types'

const initialState = { data: [], }

export default function cityReducer(state=initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return { ...state, data: action.payload, }
    default:
      return state
  }
}
