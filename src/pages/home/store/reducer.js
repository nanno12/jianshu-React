import * as constants from './constants';
import { fromJS} from 'immutable';

const defaultStore = fromJS({
  topicList:[],
  articleList: [],
  recommendList: []
})

export default (state = defaultStore, action) => {
  switch (action.type) {
    case constants.TOPIC_LIST: 
    console.log('action',action);
    return state.merge({ 
      topicList:fromJS(action.topicList),
      articleList:fromJS(action.articleList),
      recommendList:fromJS(action.recommendList),
    })
    default:
      return state
  }
}