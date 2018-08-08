import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Menu } from 'antd'

const GuestHeader = ({router}) => {
  return (
    <Menu
      defaultSelectedKeys={[router.pathname]}
      mode="horizontal">
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/foo">
        <Link href="/foo">
          <a>Foo</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/bar">
        <Link href="/bar">
          <a>Bar</a>
        </Link>
      </Menu.Item>
      <style jsx global>{`
        .ant-menu-horizontal{
          border:none;
          margin:0px
        }
      `}</style>
    </Menu>
  )
}
export default withRouter(GuestHeader)