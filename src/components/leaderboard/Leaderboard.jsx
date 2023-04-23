import React from 'react';
import './leaderboard.css';

const Leaderboard = ({ leaderboard }) => {
  return (
    <main className='leaderboard'>
      <div className='leaderboard-header'>
        <p id='column-rank'>პოზიცია</p>
        <div className='leaderboard-header--prizes'>
          <div id='column-money'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAMCAYAAACA0IaCAAAABHNCSVQICAgIfAhkiAAAALRJREFUKFPNk+ENgjAQhcsEMgJOoBuAk9gR3MCOhhvABDCCG9TvkTMxDRou8QeXXFKg7+u961HlnIcQwoncHBWBLheCuPbyF/TBx/YDNvLckAfy7oFdEMhFA2ygsMi6t5MnL+yIoBPQYDXrG+tklpfKtGFLzAjnciN6Qc/k5LEpjnrUAX0CUa8SebUDXD1TVepbAhZtCuRKfdM0uGAqQEBdwNuRLkQWFW7YovoyZzuH/e13egECzng0Nog8cAAAAABJRU5ErkJggg==' />
            <p>ვაუჩერი</p>
          </div>
          <p id='column-prize'>პრიზი</p>
        </div>
      </div>
      <div className='leaderboard-container'>
        {leaderboard.map((item, index) => {
          return (
            <div className='leaderboard-item' key={index}>
              <div className='leaderboard-rank'>{index + 1}</div>
              <div className='leaderboard-prizes'>
                <div className='leaderboard-money'>{item.money}</div>
                <div className='leaderboard-prize'>
                  {item.plane ? (
                    <img id='ticket-icon' src='/assets/travel-icon-sm.png' />
                  ) : (
                    <img id='ticket-icon' src='/assets/ticket-icon-sm.png' />
                  )}
                  {item.prize}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Leaderboard;
