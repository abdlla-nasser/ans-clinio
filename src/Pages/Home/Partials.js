import React from 'react';
import { Link } from 'react-router-dom';
import { CircleDiv, CenterLink, Li } from './styled';
import './Partials.css';

export const NavLi = ({ imageSrc, to, children }) => {
  return (
    <Li imageSrc={imageSrc}>
      <CenterLink>
        <Link style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} to={to}>{children}</Link>
      </CenterLink>
    </Li>
  )
}

export const CountDiv = ({ num, image, size = 50 }) => {
  return (
    <div className="count-div">
      <CircleDiv size={size}>{num}</CircleDiv>
      <img className="svg-img" src={image} alt=""/>
    </div>
  )
}