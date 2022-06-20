import React, { Component } from 'react';
import NavbarPL from '../Components/Navigation/pl/Navbar-pl';
import AboutmePL from './Sections/pl/Aboutme-pl';
import BackgroundPL from './Sections/pl/Background-pl';
import ContactPL from './Sections/pl/Contact-pl';
import LandingPL from './Sections/pl/Landing-pl';
import SamplesPL from './Sections/pl/Samples-pl';
import ServicesPL from './Sections/pl/Services-pl';



class HomepagePL extends Component {
  render() {
    return (
      <>
        <NavbarPL/>
        <div className="flex-col">
          <LandingPL/>
          <BackgroundPL/>
          <AboutmePL/>
          <ServicesPL/>
          <SamplesPL/>
          <ContactPL/>
        </div>
      </>
    );
  }
}

export default HomepagePL;
