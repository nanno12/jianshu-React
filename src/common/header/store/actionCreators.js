import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios'
const changeList = (data) =>({
  type: constants.GET_LIST,
  data:fromJS(data)
})
export const searchFocus = () => ({
  type:constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type:constants.SEARCH_BLUR
})
export const getList = () => {
  return (dispacth) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      dispacth(changeList(data.data))
    }).catch((res) => {
    })
  }
}

