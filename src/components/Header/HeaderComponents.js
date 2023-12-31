import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.nav`
position: fixed;
top:0;
width:100%;
left:50%;
transform:translate(-50%);
height:100px;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
background-color:white;
overflow:hidden;
z-index:50;
`
export const NavContainer = styled.div`
width:85%;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-between;
background-color:white;
overflow:hidden;
z-index:50;
`
export const NavbarLink = styled(Link)`
color:black;
padding:1rem;
font-size:1.5rem;
text-decoration:none;
text-transform: uppercase;
@media screen and (max-width: 900px) {
    display:none;
  }
`
export const NavLogo = styled.img`
height:100px;
width:auto !important;
padding-left:3rem;
@media screen and (max-width: 900px) {
  padding:0;
  margin:0;
}
`
export const NavButton = styled.button`
font-size:2.5rem;
background:none;
border:none;
cursor:pointer;
display:none;
@media screen and (max-width: 900px) {
    display:block;
  }
`
export const LinkContainer = styled.div`
padding-right:3rem;
@media screen and (max-width: 900px) {
  padding-right:1rem;

}
`