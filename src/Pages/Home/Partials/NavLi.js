import React from 'react';
import Link from '../../../components/Link'
// import { Link } from 'react-router-dom';
import {
  CenterLink,
  Li,
} from '../styled';

export default ({ imageSrc, to, children }) => {
  return (
    <Li imageSrc={imageSrc}>
      <CenterLink>
        <Link style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }} to={to}>{children}</Link>
      </CenterLink>
    </Li>
  )
}
