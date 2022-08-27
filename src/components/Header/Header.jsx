import { NavBar, HeaderWrapper, NavLinkStyled } from './Header.styled';

const Header = () => {
  return (
    <>
      <NavBar>
        <HeaderWrapper>
          <NavLinkStyled to="/home">Add contact</NavLinkStyled>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
          <NavLinkStyled to="/register">Register</NavLinkStyled>
        </HeaderWrapper>
      </NavBar>
    </>
  );
};

export default Header;
