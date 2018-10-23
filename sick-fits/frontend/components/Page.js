import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background: red;
  font-size: ${props => props.huge ? '100px' : '50px'};
  .yo {
    font-size: 100px;
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton huge>
          Click Me
          <span class="yo">Yo!</span>
        </MyButton>
        <MyButton>
          Click Me
          <span class="yo">Yo!</span>
        </MyButton>
        <p>Hey, I'm the page component.</p>
        {this.props.children}
      </div>
    )
  }
}

export default Page;