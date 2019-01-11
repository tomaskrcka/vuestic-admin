import axios from 'axios'
import { API_BASE } from '../config'

import {
  GET_USER_BY_RFID,
  GET_USER_BY_RFID_SUCCESS,
  GET_USER_BY_RFID_ERROR,
  GET_CONFIG_BY_ID,
  GET_CONFIG_BY_ID_SUCCESS,
  CREATE_ITEM,
  CREATE_ITEM_SUCCESS,
  PRINT_LABEL,
  PRINT_LABEL_SUCCESS
} from './mutation-types'

import {
  ACTION_GET_USER_BY_RFID,
  ACTION_CREATE_ITEM,
  ACTION_GET_CONFIG_BY_ID,
  ACTION_PRINT_LABEL
} from './actions.types'

export const configActions = {
  [ACTION_GET_CONFIG_BY_ID] ({ commit }, payload) {
    commit(GET_CONFIG_BY_ID)
    axios.get(`${API_BASE}/getConfigTerminal/${payload}`).then(response => {
      commit(GET_CONFIG_BY_ID_SUCCESS, response.data)
    })
      .catch(error => {
        console.log(error.response)
      })
  }
}

export const userActions = {
  [ACTION_GET_USER_BY_RFID] ({ commit }, payload) {
    commit(GET_USER_BY_RFID)
    axios.get(`${API_BASE}/getUser/${payload}`).then(response => {
      // console.log(response.data)
      commit(GET_USER_BY_RFID_SUCCESS, response.data)
    })
      .catch(error => {
        if (error.response === undefined) {
          error.response = { 'status': 404 }
        }
        commit(GET_USER_BY_RFID_ERROR, error.response)
      })
  }
}

export const itemActions = {
  [ACTION_CREATE_ITEM] ({ commit }, payload) {
    commit(CREATE_ITEM)
    axios.post(`${API_BASE}/tank`, payload).then(response => {
      commit(CREATE_ITEM_SUCCESS, response.data)
    })
  },
  [ACTION_PRINT_LABEL] ({ commit }, payload) {
    commit(PRINT_LABEL)
    axios.get(`${API_BASE}/print/${payload}`).then(response => {
      commit(PRINT_LABEL_SUCCESS, response.data)
    })
  }
}
