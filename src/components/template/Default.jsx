import React from 'react'
import {Menu, Content} from './index'
export default function Default(props) {
  return (
    <>
        <Menu />
        <Content>
            {props.children}
        </Content>
    </>
  )
}
