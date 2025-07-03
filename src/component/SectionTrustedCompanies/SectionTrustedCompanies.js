// SectionSectionTrustedCompanies
"use client"
import React from 'react';
import styles from './SectionTrustedCompanies.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import IconCollection from '../IconCollection/IconCollection';
import classNames from 'classnames';
import ContentWidth from '../ContentWidth/ContentWidth';

import billets from '../../assets/images/trustedCompany/billet.png';
import pink from '../../assets/images/trustedCompany/pink.png';
import supr from '../../assets/images/trustedCompany/supr.png';
import wake from '../../assets/images/trustedCompany/wake.png';
import Image from 'next/image';

const companiess = [
  { name: 'The Senco', logo: <IconCollection name="sencoCompany" /> },
  { name: 'Pinktada', logo: <Image src={pink} alt="Pinktada" /> },
  { name: 'Popseekl', logo: <IconCollection name="sencoCompany" /> },
  { name: 'Wake', logo: <IconCollection name="sencoCompany" /> },
  { name: 'Billets', logo: <Image src={billets} alt="Billets" /> },
  { name: 'Supr', logo: <Image src={supr} alt="Supr" /> },
  { name: 'The Senco', logo: <IconCollection name="sencoCompany" /> },
  { name: 'Pinktada', logo: <Image src={pink} alt="Pinktada" /> },
  { name: 'Popseekl', logo: <IconCollection name="popseeklCompany" /> },
  { name: 'Wake', logo: <IconCollection name="sencoCompany" /> },
  { name: 'Billets', logo: <Image src={billets} alt="Billets" /> },
  { name: 'Supr', logo: <Image src={supr} alt="Supr" /> },
  { name: 'The Senco', logo: <IconCollection name="sencoCompany" /> },
  { name: 'Pinktada', logo: <Image src={pink} alt="Pinktada" /> }, // corrected line
  { name: 'Popseekl', logo: <IconCollection name="popseeklCompany" /> },
  { name: 'Wake', logo: <IconCollection name="sencoCompany" /> },
  { name: 'Billets', logo: <Image src={billets} alt="Billets" /> },
  { name: 'Supr', logo: <Image src={supr} alt="Supr" /> },
];

const SectionTrustedCompanies = (props) => {  
  const { companyLogo } = props;
  const companies = companyLogo?.data?.data; 
  return (
    <section className={classNames(styles.container, "trustedCompaniesSlider")}>
      <ContentWidth className={styles.mainContent}>
        <h2 className={styles.heading}>TRUSTED BY 70+ COMPANIES</h2>
        <div className={styles.sliderWrapper}>
          <Swiper
            slidesPerView={6}
            // centeredSlides={true}
            loop={true}
            // cssMode={true}
            grid={{
              rows: 2,
            }}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Grid, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
          >
            {companies.map((company, index) => { 
              return ( 
                <SwiperSlide key={index}>
                  {/* <img
                    src={company.attributes.logo.data.attributes.url}
                    alt={`Company logo ${index + 1}`}
                  />  */}
                  <div className={styles.logo}>
                    <img src={company.attributes.logo.data.attributes.url} alt={`Company logo ${index + 1}`}/>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </ContentWidth>
    </section>
  );
};

export default SectionTrustedCompanies;
