import React from 'react';
import './prizes.css';
import { prizesContent } from '../../data/prizesContent';

const Prizes = () => {
  return (
    <main className='prizes'>
      {prizesContent.map((prize, index) => (
        <div className='prizes-item' key={index}>
          <div className='prizes-neon'></div>
          <img id='prizes-icon' src={prize.icon} />
          <p>{prize.text}</p>
        </div>
      ))}
    </main>
  );
};

export default Prizes;
