const Container = {
  marginTop:100,
  textAlign:'center',
  fontWeight:200
}
const Greetings = {
  fontWeight:200,
  fontSize:'42px',
  color:'#505050'
}

export default () => (
  <div style={Container}>
    <p style={Greetings}>Foo Page</p>
  </div>
)