import React from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/resources/cta-1-moc-1.png";

const CTAOne = () => {
  return (
    <section className='cta-one'>
      <img src={CtaShape1} className='cta-one__bg-shape-1' alt='awesome post' />
      <img src={CtaShape2} className='cta-one__bg-shape-2' alt='awesome post' />
      <div className='container'>
        <div className='cta-one__moc wow fadeInLeft' data-wow-duration='1500ms'>
          <img src={CtaMoc1} className='cta-one__moc-img' alt='awesome post' />
        </div>
        <div className='row justify-content-end'>
          <div className='col-lg-6'>
            <div className='cta-one__content'>
              <BlockTitle
                textAlign='left'
                paraText='Best Application'
                titleText={`
                Why StepSurf.Co? for \n Your Projects`}
              />
              <div className='cta-one__text'>
                <p>
                  We understand that when there are numerous websites dealing in
                  web traffic exchange, why would you want to put your faith in
                  us. What is it exactly that makes us stand out from our
                  competitors?
                  <li>
                    -Our website has a responsive style and a mobile-friendly
                    user interface. Our easy-to-use mobile app makes us
                    different from our competitors as there is no other website
                    offering the service of web traffic exchange through a
                    mobile app
                  </li>
                  <li>
                    -After your registration is done and verified, you will be
                    able to add your sites, following which you will earn
                    credits through our provided autosurf. Websites will appear
                    and you will earn points for every 10 seconds you stay on
                    the autosurf!
                  </li>
                  <br />
                  So, what are you waiting for? Register now and see your
                  website getting propelled to new heights of customer visits.
                </p>
              </div>
              <ul className='list-unstyled cta-one__list'>
                <li>
                  <i className='fa fa-check-circle'></i>
                  Refresing to get such a personal touch.
                </li>
                <li>
                  <i className='fa fa-check-circle'></i>
                  Duis aute irure dolor in reprehenderit in voluptate.
                </li>
                <li>
                  <i className='fa fa-check-circle'></i>
                  Velit esse cillum dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <a href='#none' className='thm-btn cta-one__btn'>
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
