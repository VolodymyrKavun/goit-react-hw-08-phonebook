import { NavBar, HeaderWrapper, NavLinkStyled } from './Header.styled';

const Header = () => {
  return (
    <>
      <NavBar>
        <HeaderWrapper>
          <NavLinkStyled to="/">Add contact</NavLinkStyled>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </HeaderWrapper>
      </NavBar>
    </>
  );
};

export default Header;
