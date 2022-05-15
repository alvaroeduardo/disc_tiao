import React from 'react';

import { Container } from '../../global_styles';

import Header from '../../Components/Header';
import EditList from '../../Components/EditList';


function Index() {
  return (
      <Container>
          <Header/>
          <EditList/>
      </Container>
  );
}

export default Index;