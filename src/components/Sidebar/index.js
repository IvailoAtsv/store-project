import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Bags</SidebarLink>
        <SidebarLink to="/shoes">Shoes</SidebarLink>
        <SidebarLink to="/dresses">Dresses</SidebarLink>
      </SidebarMenu>

      <SideBtnWrap>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
