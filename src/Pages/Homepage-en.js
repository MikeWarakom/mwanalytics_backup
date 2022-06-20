import React, { Component } from 'react';
import NavbarEN from '../Components/Navigation/en/Navbar-en';
import AboutmeEN from './Sections/en/Aboutme-en';
import BackgroundEN from './Sections/en/Background-en';
import ContactEN from './Sections/en/Contact-en';
import LandingEN from './Sections/en/Landing-en';
import SamplesEN from './Sections/en/Samples-en';
import ServicesEN from './Sections/en/Services-en';



class HomepageEN extends Component {
  render() {
    return (
      <>
        <NavbarEN/>
        <div className="flex-col">
          <LandingEN/>
          <BackgroundEN/>
          <AboutmeEN/>
          <ServicesEN/>
          <SamplesEN/>
          <ContactEN/>
        </div>
      </>
    );
  }
}

export default HomepageEN;
