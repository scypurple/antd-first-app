import React from 'react'
import { Space } from 'antd'

function ListItem(props) {
  return (
    <div>
      <Space size={4}>
        <span>{props.icon}</span>
        <span>{props.name}</span>
      </Space>
    </div>
  )
}

export default ListItem