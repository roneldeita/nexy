import { Row, Col, Layout } from 'antd'
import GuestHeader from './GuestHeader'
import GuestFooter from './GuestFooter'

const { Header, Content, Footer } = Layout

const GridLayout = (props) => (
  <Row className="grid-layout" type="flex" justify="center">
    <Col xs={24} sm={22} md={18} lg={16} xl={14} xxl={12}>
      {props.children}
    </Col>
  </Row>
)

export default (props) => (
  <Layout className="layout-content">
    <Header>
      <GridLayout>
        <GuestHeader/>
      </GridLayout>
    </Header>
    <Content>
      <GridLayout>
        {props.children}
      </GridLayout>
    </Content>
    <Footer>
      <GridLayout>
        <GuestFooter/>
      </GridLayout>
    </Footer>
    <style jsx global>{`
      .ant-layout-header{
        background: #fff !important;
        height: 48px !important;
      }
    `}
    </style>
  </Layout>
)