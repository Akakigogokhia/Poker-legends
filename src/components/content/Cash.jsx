import React from 'react';
import './content.css';
import Leaderboard from '../leaderboard/Leaderboard';
import { menuLeaderboard } from '../../data/leaderboards';
import Prizes from '../prizes/Prizes';
import Info from './Info';

const Cash = () => {
  return (
    <main className='cash'>
      <div className='content-header round-header'>
        <div className='neon'></div>
        <h3 className='content-header-main'>1₾ რეიქი = 1 ქულას</h3>
      </div>
      <div className='content-body has-round-header'>
        <div className='content-body-head'>
          <h4>ჰოლდემის TOP20 ლიდერბორდი</h4>
          <img src='/assets/example-icon.png' />
        </div>
        <Leaderboard leaderboard={menuLeaderboard} />
        <Prizes />
        <div className='content-body-head'>
          <h4>TOP20 ლიდერბორდი ჰოლდემში</h4>
          <img src='/assets/example-icon.png' />
        </div>
        <Leaderboard leaderboard={menuLeaderboard} />
        <Prizes />
        <div className='cash-footer'>
          * ლიდერბორდის შედეგები განახლდება <a>პოკერის ლობიში</a>
        </div>
      </div>
      <Info />
    </main>
  );
};

export default Cash;
