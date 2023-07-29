import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, currentPage }) => {

  const handleClickScroll = () => {
    const element = document.getElementById('footer')
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      console.log('ne brat ne stava');
    }
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink>Bags</SidebarLink>
        <SidebarLink>Shoes</SidebarLink>
        <SidebarLink>Dresses</SidebarLink>
        <SidebarLink>Watches</SidebarLink>
      </SidebarMenu>

      <SideBtnWrap>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
