'use client';

import ContentWidth from '../ContentWidth/ContentWidth';
import IconCollection from '../IconCollection/IconCollection';
import css from './SectionOurApproach.module.css';

const SectionOurApproach = (props) => { 
  // const{data = []}=props?.ourApproachs?.data;  
  const data = []; 
  const ourApproachData = [
    {
      icon: "smbs-our-approach",
      title: "SMBs",
      description:
        "Gain Global Recognition With The Right Web And App Development Services Tailored To Small-Scale Businesses, Ensuring Market Exposure And Success.",
    },
    {
      icon: "starUp-our-approach",
      title: "Startup",
      description:
        "Accelerate Your Startup's Journey To Success With Our Product Development Expertise, Enabling Scalability For Increased Funding And Rapid Growth.",
    },
    {
      icon: "Enterprise-our-approach",
      title: "Enterprise",
      description:
        "Experience The Power Of Robust And Customized Enterprise Mobility Solutions, Crafted With Expertise At Every Layer To Meet Your Unique Business Needs.",
    },
    {
      icon: "Agencies-our-approach",
      title: "Agencies",
      description:
        "Open New Horizons With Our Technical Approach, Offering Enterprises Enhanced Exposure, Improved Financial Growth, And Increased Sales And Marketing Potential.",
    },
  ];
  return (
    <section className={css.container}>
      <ContentWidth>
        <div className={css.services}>
          {data.map((service, index) => ( 
            <div key={index} className={css.serviceCard}>
              <div className={css.absoluteContent}>
              <div className={css.icon}>
                <img src={service?.attributes.Image.data[0].attributes.url}/>
                {/* <IconCollection name={service.icon} /> */}
              </div>
              <h3>{service?.attributes?.Title}</h3>
              </div>
              <p>{service?.attributes?.Description}</p>
            </div>
          ))}
        </div>
        <div className={css.buttonContainer}>
          <button className={css.learnMoreBtn}><span className="rippleBlueEffect">&nbsp;</span>Know More Our Approach</button>
        </div>
      </ContentWidth>
    </section>
  );
};

export default SectionOurApproach;
