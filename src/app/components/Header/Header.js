import React, { useContext, useEffect } from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import AuthContext from "../../layout/auth/AuthContext";
import { asyncFetchUser } from "../../../modules/auth/auth";

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

function Header() {
  const { user, dispatch } = useContext(AuthContext);

  useEffect(() => {
    asyncFetchUser(dispatch);
  });

  const renderContent = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [user ? <Item key="1">GoogleId: {user.googleId}</Item> : ""];
    }
  };

  return (
    <Nav>
      <Title>Redux-To-Hooks Example</Title>
      <List>{renderContent()}</List>
    </Nav>
  );
}

export default hot(module)(Header);
