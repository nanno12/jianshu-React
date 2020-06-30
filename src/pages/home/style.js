import styled from 'styled-components';

export const HomerWrapper = styled.div`
overflow: hidden;
width: 960px;
margin: 0 auto;
`
export const HomerLeft = styled.div`
padding-left: 15px;
padding-top: 30px;
float: left;
.banner-img {
  height: 270px;
  width: 625px;
}
`
export const HomerRight= styled.div`
width: 240px;
float: right;
`
export const TopicWrapper= styled.div`
  padding:20px 0 10px 0;
  border-bottom: 1px solid #f7f7f7;
`
export const TopicItem= styled.div`
display: inline-block;
height: 30px;
margin-right: 15px;
margin-bottom: 10px;
border:1px solid #dcdcdc;
border-radius:5px;
overflow: hidden;
background-color: #f7f7f7;
.topicItem_img {
  display: inline-block;
  height: 30px;
  width: 30px;
  float: left;
}
.topicItem_text {
  display: inline-block;
  float: right;
  padding:0 5px;
  line-height:30px;
}
`

export const ListItem= styled.div`
  padding:20px 0 ;
  border-bottom: 1px solid #f7f7f7;
  overflow: hidden;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius:10px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size:18px;
    line-height: 27px;
    font-weight: 800;
    color:#333;
  }
  .desc {
    font-size:13px;
    line-height: 18px;
    color:#999;
  }
`
export const ListConter= styled.div`
  margin:20px 0;
  display: block;
  font-size: 12px;
  color:#666;
`
export const ListMess= styled.div`
  display: block;
  font-size: 12px;
  color:#666;
`
export const RecommendWrapper= styled.div`
  height: 50px;
  width: 280px;
  margin:30px 0;
 
`
export const RecommendItem= styled.div`
  height: 50px;
  width: 275px;
  margin-bottom: 10px;
  background: url(${(prop) => prop.imgUrl});
  background-size: contain;
`

export const WriterWrapper= styled.div`
  margin-bottom: 20px;
  overflow: hidden;
`
export const WriterInfo= styled.div`
  overflow: hidden;
  font-size:15px;
  margin:20px 0;
  color:#999;
  .letf {
    float: left;
  }
  .right {
    float: right;
  }
`
export const WriterItem= styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  .letf {
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius:20px
  }
  .center {
    float: left;
    h4 {
      font-size:14px;
    }
    p {
      color:#999;
    }
  }
  .right {
    float: right;
    color:red;
  }
`
