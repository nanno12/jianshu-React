import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { CSSTransition} from 'react-transition-group';
import { actionCreators }  from './store';
import { HeaderWrapper, Logo, 
  Nav,NavItem,
  NavSearch,
  Addition,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchWrapper,
  But} from './style.js';

class Header extends Component {
  // 显示数据
  getListArea () {
    const {focused, list, page,mouseIn,pages,
      handleMouseEnter, handleMouseLeave,handleChangeList} = this.props
    const newList = list.toJS()
    const pagesList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page*10; i++) {
        pagesList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangeList(page,pages, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin"> &#xe612; </i> 换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            { pagesList }
          </div>
        </SearchInfo>
      )
    }
  }
  render () {
    const {focused,list, handleInputFocus, handleInputBlur} = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide">
              <NavSearch className={focused ? 'focused': ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe60c;</span>
            {this.getListArea()}
          </SearchWrapper>
  
        </Nav>
        <Addition>
          <But className="writing"><span className="iconfont">&#xe61b;</span>写文章</But>
          <But className="reg">注册</But>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused:state.getIn(['header', 'focused']),
    list:state.getIn(['header','list']),
    mouseIn:state.getIn(['header','mouseIn']),
    page:state.getIn(['header','page']),
    pages:state.getIn(['header','pages'])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleChangeList (page,pages,spin) {
      let aa = + spin.style.transform.replace(/[^0-9]/ig,'')
      spin.style.transform ="rotate(0deg)"
      spin.style.transform = `rotate(${aa + 360}deg)`
      if (page < pages ) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    }

  }
}
export default connect(mapStateToProps, mapDispathToProps) (Header)