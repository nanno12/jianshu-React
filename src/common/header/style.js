import styled from 'styled-components';
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
position: relative;
height:58px;
border: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({href:'./'})`
position: absolute;
top: 0;
left: 0;
display: block;
height:58px;
width: 100px;
background: url(${logo});
background-size:contain;
`
export const Nav = styled.div`
height: 100%;
width: 700px;
padding-right: 70px;
border-sizing:border-box;
margin: 0 auto;
`
export const NavItem = styled.div`
line-height:20px;
padding:17px 10px;
&.left{
  float: left;
}
&.right{
  float: right;
  color:#969696;
}
`
export const SearchWrapper = styled.div`
position: relative;
float: left;
.zoom {
  position: absolute;
  right: 5px;
  bottom:5px;
  width: 30px;
  line-height: 30px;
  border-radius:15px;
  text-align:center;
  &.focused {
    color:#fff;
    background-color: #777;
  }
}
`
export const NavSearch = styled.input.attrs({placeholder:'搜索'})`
  height: 38px;
  width: 160px;
  padding:0 30px 0 20px;
  margin-top: 9px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background-color: #eee;
  color:#666;
  font-size:14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 250px;
  }
  &.slide-enter {
    width: 160px;
    transition:all .2s ease-out
  }
  &.slide-enter-active {
    width: 250px;
  }
  &.slide-exit {
    transition:all .2s ease-out
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  width: 200px;
  top: 58px;
  left: 0;
  padding:0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-style: 14px;
color:#969696;
`
export const SearchInfoSwitch = styled.span`
float: right;
font-style: 13px;
cursor: pointer;
.spin {
  display: block;
  float: left;
  font-size: 12px;
  margin-right: 2px;
  transition: all .2s ease-in;
  transform-origin: center center;
}
`
export const SearchInfoItem =styled.a`
display: block;
padding:2px 5px;
margin-right:10px;
margin-bottom:10px;
float: left;
font-size: 12px;
line-height:10px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const But = styled.div`
  float: right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  margin-right: 20px;
  padding: 0 20px;
  font-size:14px;
  border: 1px solid #ec6149;
  &.reg {
    color:#ec6149;
  }
  &.writing {
    color:#fff;
    background-color: #ec6149;
  }
`
