import React from 'react'
import { Col } from 'antd';
import { WarraperTextHeader, WrapperHeader, WrapperHeaderAccout, WrapperTextHeaderSmall } from './style';
import Search from 'antd/es/transfer/search';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div>
    <WrapperHeader gutter={16}>
      <Col span={6}>
        <WarraperTextHeader>DEVANH</WarraperTextHeader>
      </Col>
      <Col span={12}>
        <Search
              placeholder="input search text"
              enterButton="Search"
            //   onSearch={onSearch}
        />
      </Col>
      <Col span={6} style={{display : 'flex', gap : '30px'}}>
        <WrapperHeaderAccout>
            <UserOutlined style={ {fontSize : '30px'}} />
            <div>
                <WrapperTextHeaderSmall >Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                <div>
                    <WrapperTextHeaderSmall>Tài khoản </WrapperTextHeaderSmall>
                    <CaretDownOutlined style={{fontSize : '12px'}} />
                </div>
                
            </div>
        </WrapperHeaderAccout>
        <div>
            <ShoppingCartOutlined style={ {fontSize : '30px',color : '#fff'}} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
        </div>
      </Col>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
