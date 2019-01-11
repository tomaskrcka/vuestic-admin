import {
  GET_CONFIG_BY_ID,
  GET_CONFIG_BY_ID_SUCCESS,
  PRINT_LABEL,
  PRINT_LABEL_SUCCESS,
  GET_USER_BY_RFID,
  GET_USER_BY_RFID_SUCCESS,
  GET_USER_BY_RFID_ERROR,
  CREATE_ITEM,
  CREATE_ITEM_SUCCESS,
  ERROR_MSG
} from './mutation-types'

export const configMutations = {
  [GET_CONFIG_BY_ID] (state) {
    state.showLoader = true
  },
  [GET_CONFIG_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    state.config = payload
  }
}

export const itemMutations = {
  [CREATE_ITEM] (state) {
    state.showLoader = true
  },
  [CREATE_ITEM_SUCCESS] (state, payload) {
    state.showLoader = false
    state.tank = payload
  },
  [PRINT_LABEL] (state) {
    state.showLoader = true
  },
  [PRINT_LABEL_SUCCESS] (state, payload) {
    state.showLoader = false
  },
  [ERROR_MSG] (state, payload) {}
}

export const userMutations = {
  [GET_USER_BY_RFID] (state) {
    state.showLoader = true
  },
  [GET_USER_BY_RFID_SUCCESS] (state, payload) {
    state.showLoader = false
    state.user = payload
  },
  [GET_USER_BY_RFID_ERROR] (state, payload) {
    state.showLoader = false
    state.user = payload
  }
}
