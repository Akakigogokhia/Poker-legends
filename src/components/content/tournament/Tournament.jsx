import React from 'react';
import './tournament.css';

const Tournament = ({ tournaments }) => {
  return (
    <main className='tournament'>
      <h3>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</h3>
      <div className='tournament-container'>
        {tournaments.map((tour, index) => (
          <div
            key={index}
            className={tour.main ? 'col tournament-main' : 'col tournament-sec'}
          >
            <div>
              <div>
                <p className='tournament-name'>{tour.name}</p>
                <div className='tournament-prize'>{tour.prize}</div>
              </div>
              <div>
                <p className='tournament-buyIn'>{'ბაი-ინი - ' + tour.buyIn}</p>
                <div
                  className={
                    tour.main ? 'tournament-date date-main' : 'tournament-date'
                  }
                >
                  {tour.date}
                </div>
              </div>
            </div>
          </div>
        ))}
        <p className='tournament-info'>
          * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
          The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
          საგზურის მისაღებად.
        </p>
      </div>
    </main>
  );
};

export default Tournament;
