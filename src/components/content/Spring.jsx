import React from 'react';
import './content.css';
import Leaderboard from '../leaderboard/Leaderboard';
import { leaderboard } from '../../data/leaderboards';
import Prizes from '../prizes/Prizes';
import Tournament from './tournament/Tournament';
import { tournaments } from '../../data/tournaments';
import Info from './Info';

const Spring = () => {
  return (
    <main className='spring'>
      <div className='cash'>
        <section className='content-header'>
          <div className='neon'></div>
          <h3 className='content-header-main'>ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</h3>
        </section>
        <section id='spring-container' className='content-body'>
          <div className='spring-times-info--top'>
            <img src='/assets/promo-left-img.png' className='spring-left' />
            <img src='/assets/promo-right-img.png' className='spring-right' />
            <p className='spring-series'>
              სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:{' '}
            </p>
            <div className='spring-times'>
              <div className='spring-times-clock'>
                <img id='spring-clock' src='/assets/clock.png' />
              </div>
              19:00 / 19:30 / 20:00
            </div>
          </div>
          <div className='spring-times-info'>
            <p className='spring-text--small'>
              *ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან
            </p>
            <p className='spring-text--small'>
              ტურნირების სრული განრიგის სანახავად გადადი <br /> პოკერის ლობიში
            </p>
            <div className='spring-button'>
              <button className='spring-lobby'>პოკერის ლობი</button>
            </div>
          </div>
        </section>
        <section className='content-header round-header'>
          <div className='neon'></div>
          <h3 className='content-header-main'>
            ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ
          </h3>
        </section>
        <div className='content-body has-round-header'>
          <div className='spring-points'>
            ქულების დაგროვების მექანიკა
            <img
              src='/assets/mechanic-icon.png'
              className='spring-points-img'
            />
          </div>
          <Leaderboard leaderboard={leaderboard} />
          <Prizes />
          <div className='cash-footer'>
            * ლიდერბორდის შედეგები განახლდება <a>პოკერის ლობიში</a>
          </div>
          <div className='cash-footer'>
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </div>
        </div>
        <Tournament tournaments={tournaments} />
        <Info />
      </div>
    </main>
  );
};

export default Spring;
