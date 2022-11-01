import React from 'react';
import Pages from "./pages/Pages";
import Categories from './components/Categories';
import  { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiForkKnifeSpoon } from 'react-icons/gi';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}> Recipe App </Logo>
          <GiForkKnifeSpoon/>
        </Nav>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 2rem;
font-weight: 700;
font-family: 'Montserrat', sans-serif;
`;

const Nav = styled.div`
padding: 4rem 0rem;
dispplay: flex;
justify-content: flex-start;
align-items: center;
svg {
  font-size: 2rem;
}
`;

export default App;
