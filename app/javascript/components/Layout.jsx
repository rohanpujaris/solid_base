import React, { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import { Menu, Space } from 'antd'

const items = [
  {
    key: 'page1',
    label: <Link href="/">Dashboard</Link>
  },
  {
    key: 'page2',
    label: <Link href="/page2">Test</Link>
  }
]
function Layout({ children }) {
  const [current, setCurrent] = useState(
    window.location.pathname === '/' ? 'page1' : 'page2'
  )
  const onClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <Space direction="vertical">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {children}
    </Space>
  )
}
export default function LayoutWrapper(page) {
  return <Layout>{page}</Layout>
}
