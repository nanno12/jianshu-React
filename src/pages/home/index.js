import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import List from './component/List';
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import Writer from './component/Writer';
import { actionCreators }  from './store';

import {
  HomerWrapper,
  HomerLeft,
  HomerRight,

} from './style';

class Home extends PureComponent {
  render () {
    return (
      <HomerWrapper>
        <HomerLeft>
          <img alt="" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4986/33b9e72aff1e083dfb5aa7a1c8a427e53fdc1e9e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          <Topic></Topic>
          <List></List>
        </HomerLeft>
        <HomerRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomerRight>
        <div>回到top</div>
      </HomerWrapper>
    )
  }
  componentDidMount () {
    this.props.chengeHomeData()
  }
}
const mapDispatch = (dispatch) => ({
    chengeHomeData() {
      const action = actionCreators.getListInfo()
      dispatch(action)
    }
})
export default connect(null, mapDispatch)(Home)