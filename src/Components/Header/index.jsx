import React from 'react';

import { Title } from '../../global_styles';
import { Container, Img } from './style';

import imageTop from '../../Img/banner.jpg';

function Header() {
  return (
    <Container>
        <Img theme={imageTop} />
        <Title>Discografia</Title>
    </Container>
  )
}

export default Header;