import * as constants from './constants';
import axios from 'axios'

const changeHomeData = (data) => ({
  type:constants.TOPIC_LIST,
  topicList:data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList
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


