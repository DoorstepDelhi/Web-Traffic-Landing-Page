import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/banner-moc-1-1.png";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  return (
    <section className='banner-one' id='home'>
      <img
        src={BannerShape}
        className='banner-one__bg-shape-1'
        alt='awesome post'
      />
      <div
        className='banner-one__bg'
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className='container'>
        <ModalVideo
          channel='youtube'
          isOpen={open.isOpen}
          videoId='Kl5B6MBAntI'
          onClose={() => setOpen({ isOpen: false })}
        />
        <div
          onClick={openModal}
          onKeyDown={openModal}
          role='button'
          tabIndex='0'
          className='banner-one__video video-popup'
        >
          <i className='fa fa-play'></i>
        </div>
        <div className='banner-one__moc'>
          <img
            src={BannerMoc}
            className='wow fadeInUp'
            data-wow-duration='1500ms'
            alt='awesome post'
          />
        </div>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='banner-one__content'>
              <form
                className='banner-one__mc-form mc-form'
                data-url='MAILCHIMP__POPUP__FORM__URL'
              >
                <input type='text' name='email' placeholder='Email address' />
                <button type='submit' className='thm-btn banner-one__mc-btn'>
                  <span>Free Trial</span>
                </button>
              </form>
              <div className='mc-form__response'></div>
              <h3>
                Manage Your <br /> Project with <br /> Application
              </h3>
              <p>
                <b> The instant formula to manage traffic on your website!!</b>{" "}
                <br /> Are you seeking out ways to reach out to more people and{" "}
                <br /> raise traffic on your website but don’t know where to
                start? <br />
                We, at Stepsurf, aim to provide you with instant traffic and
                help you see remarkable results. Today, the Stepsurf Family has
                amassed 1 million satisfied customers. Are you ready to be a
                part of our global community? Excited to have you onboard.
              </p>
              <a href='#none' className='thm-btn banner-one__btn'>
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
