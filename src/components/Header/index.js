import { HeaderContainer, LinkContainer, NavButton, NavLogo, Navbar, NavbarLink } from "./HeaderComponents"
import logo from '../../images/logo.png'
import {MdMenu} from 'react-icons/md'
const Header = ({toggle}) => {
    return (
        <HeaderContainer>
            <NavLogo src={logo} />
            <LinkContainer>
            <NavbarLink to="/">bags</NavbarLink>
            <NavbarLink to="/shoes">shoes</NavbarLink>
            <NavbarLink to="/dresses">dresses</NavbarLink>
            <NavButton onClick={toggle}> <MdMenu /> </NavButton>
            </LinkContainer>
        </HeaderContainer>
    )
}
export default Header