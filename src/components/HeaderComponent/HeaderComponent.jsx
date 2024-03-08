import React from 'react'
import { Col } from 'antd';
import { WarraperTextHeader, WrapperHeader, WrapperHeaderAccout, WrapperTextHeaderSmall } from './style';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
    <WrapperHeader >
      <Col span={6}>
        <WarraperTextHeader>DEVANH</WarraperTextHeader>
      </Col>
      <Col span={12}>
        <ButtonInputSearch
          size = 'large'
          textButton = "Tìm kiếm"
          placeholder ="Nhập vào để tìm kiếm ..."
            //   onSearch={onSearch}
        />
      </Col>
      <Col span={6} style={{display : 'flex', gap : '30px', alignItems : "center"}}>
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
