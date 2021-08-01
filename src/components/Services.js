import React from "react";
import BlockTitle from "./BlockTitle";

const Services = () => {
  return (
    <section className='service-one' id='features'>
      <div className='container'>
        <BlockTitle
          textAlign='center'
          paraText='Feature List'
          titleText={`Appton Providing You \n Best Features`}
        />
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='service-one__single'>
              <div className='service-one__inner'>
                <div className='service-one__circle'></div>
                <div className='service-one__icon'>
                  <i className='apton-icon-computer-graphic'></i>
                </div>
                <h3>Simple UI design</h3>
                <p>
                  <ol>
                    <li>A simple, scalable and responsive UI .</li>
                    <li>Available for Android and IOS.</li>
                    <li> Concise and a lot less complicated</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='service-one__single'>
              <div className='service-one__inner'>
                <div className='service-one__circle'></div>
                <div className='service-one__icon'>
                  <i className='apton-icon-development'></i>
                </div>
                <h3>Efficient</h3>
                <ol>
                  <li>A hassle-free registration system. </li>
                  <li>
                    A fast verification of your websites (less than 24 hrs.){" "}
                  </li>{" "}
                  <li>
                    A unique autosurf engine bringing you a diversity in traffic
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='service-one__single'>
              <div className='service-one__inner'>
                <div className='service-one__circle'></div>
                <div className='service-one__icon'>
                  <i className='apton-icon-development1'></i>
                </div>
                <h3>Traffic Source and Limits</h3>
                <ol>
                  <li>
                    {" "}
                    Stepsurf allows you to stand out from other traffic
                    exchanges by allowing you to choose between organic, direct
                    and referral reach.
                  </li>
                  <li>
                    StepSurf allows you to set daily limits and total limits.
                    Hence, allowing you full control over your exchange.
                  </li>
                  <li>
                    We have levels for better visit duration besides other
                    rewards and bonuses.{" "}
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='service-one__single'>
              <div className='service-one__inner'>
                <div className='service-one__circle'></div>
                <div className='service-one__icon'>
                  <i className='apton-icon-responsive'></i>
                </div>
                <h3>Powerful</h3>
                <ol>
                  <li>Change user-agent</li>
                  <li>
                    Reduction in bounce rate helps you to represent your visit
                    duration effectively and accurately.
                  </li>
                  <li>
                    Multi-instance ready as 1 account can have multiple IP
                    addresses
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
