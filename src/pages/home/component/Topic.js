import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style.js';

class Topic extends Component {
  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map((item) => (
              <TopicItem key={item.get('id')}>
                <img alt="" className="topicItem_img" src={item.get('imgUrl')} />
                <span className="topicItem_text">{item.get('title')}</span>
              </TopicItem>
            )
          )
        }
      </TopicWrapper>
    )
  }
}
const mapState = (state) => ({
  list:state.getIn(['home','topicList'])
})
export default  connect(mapState, null)(Topic)