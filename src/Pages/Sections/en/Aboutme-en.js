import React, { Component } from 'react';

class AboutmeEN extends Component {
  render() {
    return (
      <section id="aboutme" className="bg-slate-800 w-full h-full">
        <div className="w-full md:pt-72 pt-36  md:pl-10 pl-2 md:text-6xl text-4xl font-body text-white">
          <p>Introducing Michal Warakomski Analytics</p>
        </div>  
        <div className="flex md:flex-row flex-col w-full pt-10 md:pl-10 pl-2  md:text-6xl text-4xl font-body text-white">
            <p>"I work to find more meaning in data."</p>
            <div className="md:pt-36 pt-10 font-body text-right pr-2 text-zinc-300 text-4xl md:pb-56 pb-36">
              <button  className="hover:text-white transition ease-in-out duration-500">
                <a href="mikew.netlify.app">More about me</a>
              </button>
            </div>
        </div>
      </section>
      
    );
  }
}

export default AboutmeEN;