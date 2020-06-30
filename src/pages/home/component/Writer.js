import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriterInfo,
  WriterItem
} from '../style.js';

class Writer extends Component {
  render() {
    return (
      <WriterWrapper>
        <WriterInfo>
          <span className="left">作者推荐</span>
          <span className="right">换一批</span>
        </WriterInfo>
        <WriterItem>
          <img alt="" className="letf" src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" />
          <div className="center">
            <h4>title</h4>
            <p>desc</p>
          </div>
          <div className="right"> + 关注</div>
        </WriterItem>
      </WriterWrapper>
    )
  }
}
const mapState = (state) => ({

})
export default connect(mapState, null) (Writer)