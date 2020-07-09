import * as constants from './constants';
import axios from 'axios'
import { fromJS } from 'immutable';

const changeHomeData = (data) => ({
  type:constants.TOPIC_LIST,
  topicList:data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList
})
const moreList = (data) => ({
  type:constants.GET_MORE_LIST,
  data:fromJS(data)
})
export const getListInfo = () => {
  return (dispacth) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data.data
      console.log(data);
      dispacth(changeHomeData(data))
    }).catch(() => {

    })
  }
}
 export const getMoreList = () => {
   return (dispacth) => {
     axios.get('/api/homeList.json').then((res) => {
       const data = res.data.data
       console.log('data',data.articleList);
       dispacth(moreList(data.articleList))
     })
   }
 }

