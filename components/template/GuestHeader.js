import React from 'react'
import { Menu } from 'antd'

export default () => {
  return(
    <Menu
      defaultSelectedKeys={['home']}
      mode="horizontal">
      <Menu.Item key="home">
        Home
      </Menu.Item>
      <Menu.Item key="foo">
        Foo
      </Menu.Item>
      <Menu.Item key="bar">
        bar
      </Menu.Item>
    </Menu>
  )
}