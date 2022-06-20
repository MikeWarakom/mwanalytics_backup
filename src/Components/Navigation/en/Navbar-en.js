import React, { useState } from 'react';
import { Link as Linker } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Hamburger.css';
import './Menu-unhide.css'

const NavbarEN = () => {

    const [Active, setActive ] = useState(false);

    const onClick = (e) => {e.preventDefault(); setActive(!Active)}  
    const hide = (e) => {e.preventDefault(); setActive(false)};


    const navigation = [
      {id: 1, text: 'Offer', link: 'services'},
      {id: 2, text: 'About me', link: 'aboutme'},
      {id: 3, text: 'Contact', link: 'contact'}
    ]

      return (
          <>
            <div className="pt-6 fixed md:pl-10 pl-8 h-20 md:w-full w-full z-10 bg-slate-800">
              <div className="text-white flex justify-between">
                <div className="font-body text-white text-3xl">
                  <h1>
                    MWA
                  </h1>
                </div>
              <div className="md:flex pr-36 font-body  hidden text-zinc-300 text-xl space-x-20">
              {navigation.map(({id, text, link })=> (
                  <button key={id} className="hover:text-white transition ease-in-out duration-500">
                    <Link  key={id} to={link} smooth={true} duration={700}>{text}</Link>
                  </button>
                ))}
                </div>
              </div>
            </div>
            <div onClick={onClick} className="box fixed">
              <div className={`${Active ? 'active' : 'not-active'} object-center z-30 btn`}>
                  <span className='line'></span>
                  <span className='line'></span>
                  <span className='line'></span>
              </div>
             </div>
            <div>
          </div>
            <div  className={`${Active ? 'open' : ''}  menuUnhide fixed flex justify-between  text-2xl bg-white  z-40 h-screen w-screen`}>
                <div>

                </div>
                <div className="z-40 flex-col text-7xl md:text-8xl pr-16 md:pr-56 pt-48 md:pt-36">
                {navigation.map(({id, text, link })=> (
                  <button  key={id} className="b-4 block pb-5">
                    <Link key={id} onClick={hide} to={link} className="hover:border-b-2 hover:border-black transition ease-in-out duration-500">{text}</Link>
                  </button>
                ))}
                
              </div>
              <div className="z-40 absolute right-20 bottom-10 flex md:text-3xl text-2xl border border-black justify-end">
                  <Linker to='/PL'>PL</Linker>
                  <p>&nbsp; / &nbsp;</p>
                  <Linker to='/'>EN</Linker>
                </div>
            </div>
          </>
    );
  }


export default NavbarEN;