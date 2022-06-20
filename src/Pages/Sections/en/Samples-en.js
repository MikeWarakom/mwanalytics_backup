import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import profit from '../../../../src/Img/profit_by_segment.png'
import quantity from '../../../../src/Img/quantity_by_segment.png'
import countrySales from '../../../../src/Img/sales_by_country.png'
import monthlySales from '../../../../src/Img/sales_by_month_and_year.png'
import categorySales from '../../../../src/Img/sales_by_sub_category.png'
import yoySales from '../../../../src/Img/sales_difference_YOY.png'


const SamplesEN = () => {
    return (
      <section className="overflow-hidden items-center w-full h-full bg-slate-800">
        <div className="flex md:flex-row items-center md:justify-between flex-col pb-10 md:pb-48 pt-10 ">
          <Parallax scale={[0.4, 1.2]} translateX={['-150px', '150px', 'easeOutQuint']}>
            <div className="md:-ml-0 -ml-36">
              <img  src={profit} alt="profit_by_segment" width="500"/>
            </div>
          </Parallax>
          <Parallax scale={[0.4, 1.2]} translateX={['150px', '-150px', 'easeOutQuint']}>
            <div className="md:-mr-0 -mr-36">
              <img src={quantity} alt="quantity_by_segment" width="500"/>
            </div>
          </Parallax>
        </div>
        <div className="flex md:flex-row items-center md:justify-between flex-col pb-10 md:pb-48 pt-10 ">
          <Parallax scale={[0.4, 1.2]} translateX={['-150px', '150px', 'easeOutQuint']}>
            <div className="md:-ml-0 -ml-36">
              <img  src={countrySales} alt="sales_by_country" width="500"/>
            </div>
          </Parallax>
          <Parallax scale={[0.4, 1.2]} translateX={['150px', '-150px', 'easeOutQuint']}>
            <div className="md:-mr-0 -mr-36">
              <img src={monthlySales} alt="sales_by_month_and_year" width="500"/>
            </div>
          </Parallax>
        </div>
        <div className="flex md:flex-row items-center md:justify-between flex-col pb-20 md:pb-48 pt-10 ">
          <Parallax scale={[0.4, 1.2]} translateX={['-150px', '150px', 'easeOutQuint']}>
            <div className="md:-ml-0 -ml-36">
              <img  src={categorySales} alt="sales_by_sub_category"  width="500"/>
            </div>
          </Parallax>
          <Parallax scale={[0.4, 1.2]} translateX={['150px', '-150px', 'easeOutQuint']}>
              <div className="md:-mr-0 -mr-36">
                <img src={yoySales} alt="sales_difference_YOY" width="500"/>
              </div>
          </Parallax>
        </div>
      </section>
    );
}

export default SamplesEN;