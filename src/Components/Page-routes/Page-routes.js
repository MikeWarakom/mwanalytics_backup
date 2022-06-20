import { useLocation, Routes, Route  } from 'react-router-dom';
import React from 'react';
import HomepageEN from '../../Pages/Homepage-en';
import HomepagePL from '../../Pages/Homepage-pl';


const Pageroutes = () => {
  
  const location = useLocation();

  return ( 
      <>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomepageEN />}/>
          <Route path='/EN' element={<HomepageEN />}/>
          <Route path='/PL' element={<HomepagePL />}/>
        </Routes>
      </>
    );
  }


export default Pageroutes;