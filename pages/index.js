import {Icon} from 'antd'
const Container = {
  marginTop:100,
  textAlign:'center'
}
const Greetings = {
  fontWeight:200,
  fontSize:'42px',
  color:'#505050'
}

export default () => (
  <div style={Container}>
    <h1 style={Greetings}>NextJS + Ant Design = <Icon type="heart-o"/></h1>
    <p>NextJS Guide: <a href="https://nextjs.org/docs/" target="_blank">https://nextjs.org/docs/</a></p>
    <p>React UI Library  : <a href="https://ant.design/" target="_blank">https://ant.design/</a></p>
  </div>
)