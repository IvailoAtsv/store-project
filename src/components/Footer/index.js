import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaLocationArrow,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import { BsFillBagFill } from 'react-icons/bs'
import {TbShoe} from 'react-icons/tb'
import {GiLargeDress} from 'react-icons/gi'
import { MdEmail} from 'react-icons/md'
import {
  FooterContainer,
  FooterWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  ContactDiv,
  Heading,
  ContactA,
  FooterLink,
  LinkContainer,
  ContactPairDiv,
  LogoContainer,
  LinkPairDiv,
  LogoDiv,
  LogoImg,
} from './FooterElements';
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <FooterContainer id='footer'>
      <FooterWrap>
        <LogoContainer>
        <LogoDiv>
          <LogoImg src={logo}></LogoImg>
        </LogoDiv>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://grabo.bg/places/chateau-windy-hills' target='_blank' aria-label='Instagram'>
              <FaRegCalendarAlt />
            </SocialIconLink>
          </SocialIcons>
        </LogoContainer>
        <ContactDiv>
          <Heading>Contacts</Heading>
          <ContactPairDiv><FaPhone /> +35944444444</ContactPairDiv>
          <ContactPairDiv> <FaLocationArrow /> <ContactA href='https://www.google.com/maps/'> Location</ContactA></ContactPairDiv>
          <ContactPairDiv><MdEmail /> fashionmag@gmail.com</ContactPairDiv>

        </ContactDiv>

        <LinkContainer>
          <Heading>Useful links</Heading>
          <LinkPairDiv><BsFillBagFill /><FooterLink to="/">Bags</FooterLink></LinkPairDiv>
          <LinkPairDiv><TbShoe /><FooterLink to="/shoes/">Shoes</FooterLink></LinkPairDiv>
          <LinkPairDiv><GiLargeDress /><FooterLink to="/dresses/">Dresses</FooterLink></LinkPairDiv>
        </LinkContainer>

      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
