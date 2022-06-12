import React from 'react'
import { HomeTwoTone } from '@ant-design/icons'
import { Space } from 'antd'

function ListItem() {
  return (
    <div>
      <a href='/' >
        <Space size={4}>
          <span><HomeTwoTone twoToneColor="#eb2f96" /></span>
          <span>主页</span>
        </Space>
      </a>
    </div>
  )
}

export default ListItem