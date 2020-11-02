import React, { Component } from 'react'
import LayoutHeader from './layout_header'
import styled from 'styled-components';

const Wraper = styled.div`
    text-align: center;
    width: 1200px;
    margin: auto;
    background-color: #cccccc;
    padding: 40px;
`;

const MyLayout = ({children}) =>  {
  return (
    <div>
      <LayoutHeader />
      <Wraper >
        {children}
      </Wraper>
    </div>
  )
}

export default MyLayout