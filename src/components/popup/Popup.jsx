import React, { useEffect, useRef, useState } from 'react';
import './popup.css';
import Menu from '../menu/Menu';
import { motion } from 'framer-motion';
import { ads } from '../../data/ads';

const Popup = () => {
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth + 43);
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll('.slider-item img');
    images.forEach((image) => {
      image.addEventListener('load', () => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth + 43);
      });
    });
  }, []);

  return (
    <main className='popup'>
      <section className='popup-auth'>
        <img className='popup-auth-logo' src='/assets/logo.png' />
        <div>
          <div>Sign up</div>
          <div className='popup-auth-2'>Sign in</div>
        </div>
      </section>
      <section className='popup-heading'>
        <section className='popup-header'>
          <div className='popup-header-date'>
            <div>სლოტები</div>
            10 იანვარი - 12 მარტი
          </div>
          <img src='assets/close-icon.png' className='popup-close'></img>
        </section>
        <div className='popup-bg'>
          <img id='banner' src='/assets/banner.jpg' />
        </div>
      </section>
      <aside className='popup-desc'>
        <div className='popup-header-date--small'>
          <div>სლოტები</div>
          10 იანვარი - 12 მარტი
        </div>
        <div className='popup-desc--big'>მოიპოვე 10 საგზურიდან ერთ-ერთი</div>
        <div className='popup-desc--small'>
          მოხვდი პოკერის ფესტივალზე მალტაში
        </div>
      </aside>
      <Menu />
      <section className='rules'>
        <p className='rules-heading'>წესები და პირობები</p>
        <div className='rules-container'>
          <div className='rule'>
            როდის იწყება და რა ფორმატით გაიმართება აქცია
            <img src='/assets/down-arrow.png' />
          </div>
          <div className='rule'>
            როგორ მივიღო აქციაში მონაწილეობა?
            <img src='/assets/down-arrow.png' />
          </div>
          <div className='rule'>
            სხვადასვა
            <img src='/assets/down-arrow.png' />
          </div>
        </div>
      </section>
      <section className='footer'>
        <p className='footer-heading'>მსგავსი აქციები</p>
        <motion.div className='slider' ref={slider}>
          <motion.div
            drag='x'
            dragConstraints={{ right: 0, left: -width }}
            className='slider-inner'
          >
            {ads.map((ad, index) => (
              <motion.div key={index} className='slider-item'>
                <img src={ad.src} />
                <div
                  className='slider-item-text'
                  style={{ background: ad.gradient }}
                >
                  <p className='ad-info'>{ad.info}</p>
                  <p className='ad-details'>{ad.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <div className='popup-action--fixed'>
        <button className='popup-action-button'>ითამაშე</button>
      </div>
    </main>
  );
};

export default Popup;
