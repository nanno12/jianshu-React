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
      return state.merge({ 
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
      })
    case constants.GET_MORE_LIST: 
      return state.set('articleList',state.get('articleList').concat(action.data))
      // console.log(fromJS(action.data),'1232132123');
    default:
      return state
  }
}