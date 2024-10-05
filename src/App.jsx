import React, { Fragment } from 'react';
import Header from './Components/Header';
import Section1 from './Components/Section-1';
import Section2 from './Components/Section-2';
import Section3 from './Components/Section-3';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Fragment>
  );
}

export default App
