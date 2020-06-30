import * as constants from './constants';
import { fromJS} from 'immutable';

const defaultStore = fromJS({
  focused: false,
  mouseIn:false,
  list:[],
  page:1,
  pages:1
})

export default (state = defaultStore, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS: 
      return state.set('focused',true)
    case constants.SEARCH_BLUR:
      return state.set('focused',false) 
    case constants.GET_LIST:
      return state.merge ({
        list:action.data,
        pages:action.pages
      })
    case constants.CHANGE_PAGE:
      return state.set('page',action.page) 
    case constants.MOUSE_ENTER:
      return state.set('mouseIn',true) 
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn',false)
    default:
      return state
  }
}