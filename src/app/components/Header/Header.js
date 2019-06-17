import React, { Component } from "react";
import noop from "lodash/noop";
import { hot } from "react-hot-loader";
import { oneOfType, func, shape, number, bool, any } from "prop-types";
import styled from "styled-components";

const Nav = styled.nav`
  width: 80%;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
`;

const Title = styled.div`
  width: 60%;
  text-align: center;
  font-size: 30px;
`;

const List = styled.ul`
  padding-left: 0;
  margin: 0;
  width: 40%;
  text-align: center;
`;

const Item = styled.li`
  margin: 0 5px;
  list-style-type: none;
`;

class Header extends Component {
  static propTypes = {
    asyncFetchUser: func,
    user: oneOfType([
      bool,
      any,
      shape({
        credits: number
      })
    ])
  };

  static defaultProps = {
    asyncFetchUser: noop
  };

  componentDidMount() {
    this.props.asyncFetchUser();
  }

  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          this.props.user ? (
            <Item key="1">GoogleId: {this.props.user.googleId}</Item>
          ) : (
            ""
          )
        ];
    }
  }

  render() {
    return (
      <Nav>
        <Title>Redux-To-Hooks Example</Title>
        <List>{this.renderContent()}</List>
      </Nav>
    );
  }
}

export default hot(module)(Header);
