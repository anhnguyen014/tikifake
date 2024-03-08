import { Button, Input } from 'antd'
import {SearchOutlined} from '@ant-design/icons'

import React from 'react'

const ButtonInputSearch = (props) => {
    const {size, placeholder, textButton}=props
  return (
    <div style={{display : 'flex'}}>
      <Input size={size} placeholder={placeholder}  style={{backgroundColor : '#fff', borderRadius : "0", border: "none"}} />
      <Button size={size} bordered = {false}  icon={<SearchOutlined />} style={{background : 'rgb(13, 92, 182)', color: "#fff" , border : "none" , borderRadius : "0"}}  >{textButton}</Button>
    </div>
  )
}

export default ButtonInputSearch
