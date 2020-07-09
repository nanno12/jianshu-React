import React, {Component} from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store';
import { ListItem,
  ListInfo,
  } from '../style'

class List extends Component {
  render() {
    const {list, handleClickMose} = this.props
    return (
      <div>
        {
          list.map((item) => (
              <ListItem key={item.get('id')}>
                <img className='pic' src={item.get('imgUrl')} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          )
        }
        <div onClick={handleClickMose}>显示更多</div>
      </div>
    )
  }
}
const mapState = (state) => ({
  list:state.getIn(['home','articleList'])
})

const mapDispatch = (dispatch) => ({
  handleClickMose () {
    dispatch(actionCreators.getMoreList())
  }
})

export default  connect(mapState, mapDispatch)(List)