import React from 'react'
import { GET_CITIES, } from '../types'
const API_URL = 'https://mocki.io/v1/ff10175c-fcc6-4b96-b177-c592bea8ea13'

export function getCities() {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await result.json()
      if (json) {
        dispatch({
          type: GET_CITIES,
          payload: json,
        })
      } else {
        console.error('Unable to fetch')
      }
    }
  } catch (error) {
    console.error(error)
  }
}
