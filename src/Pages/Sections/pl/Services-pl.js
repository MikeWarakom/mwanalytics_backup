import React, { useState } from 'react';
import tick from '../../../../src/Img/tick.png';


const ServicesEN = () =>  {
    
  const ServicesDetails = [
    ["Dynamiczne dashboardy w excelu", "Dashboardy Power Bi", "Używanie zaawansowanych narzędzi"],
    ["Modelowanie i czyszczenie danych", "Automatyzacja danych",  "Wizualizacja danych",  "Wgląd biznesowy"],
    ["Strony startowe", "Responsywny format",  "Animacje i design 3D"]
  ];

  const Services = [
    {card_id:0, text1: "Dashboards", text2: "& Reporting", card_animation: require('../../../../src/Img/presentation.gif'), card_animation_static: require('../../../../src/Img/presentation_static.png')},
    {card_id:1, text1: "Data", text2: "Analysis", card_animation: require('../../../../src/Img/laptop.gif'), card_animation_static: require('../../../../src/Img/laptop_static.png')},
    {card_id:2, text1: "Web", text2: "Development", card_animation: require('../../../../src/Img/internet.gif'), card_animation_static: require('../../../../src/Img/internet_static.png')},
  ];

  const [isShown, setIsShown] = useState();

  const getServicesDetails = (prop) => {
    let length = ServicesDetails.length
    for (let i = 0; i <= length; i++) {
      if (prop === i) {
          return ServicesDetails[i].map(
          (item, e) => {
            return <div className='flex pl-4' key={e}><img className="absolute -ml-5 pt-2" src={tick} alt="tick" width="16"/>{item}</div>
          } 
        )
      }
    } 
  }
    return (
      <section id="services" className="md:pt-24 font-body text-white w-full h-full bg-slate-800 md:pb-36 ">
        <h1 className="text-center w-full text-7xl md:text-8xl">
          <p>Serwisy</p>
        </h1>
          <div className="text-3xl text-center max-w-lg md:max-w-none md:w-full h-full pt-16  flex m-auto md:flex-row flex-col justify-center gap-6">
            {Services.map(({card_id, text1, text2, card_animation, card_animation_static}) => (
              <div key={card_id} className="md:ml-0 md:mr-0 md:pl-0  pb-5 w-72 m-auto h-full border  border-white"
                onMouseEnter={() => setIsShown(card_id+1)}
                onMouseLeave={() => setIsShown(false)}>
                {((isShown === card_id+1) && (
                  <img src={card_animation} alt={card_id} width="60"/>
                )) || <img src={card_animation_static} alt={card_id} width="60"/>}
                <div className="md:pt-10 md:pb-20 pt-6 pb-10">
                    <h3>{text1}</h3>
                    <h3>{text2}</h3>
                </div>
                <div className="md:h-56 space-y-2 md:text-2xl text-left pl-4 pb-10">
                  {getServicesDetails(card_id)}
                </div>
            </div>
            ))
            }
          </div>
      </section>
    );
  }


export default ServicesEN;