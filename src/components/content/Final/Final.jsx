import React from 'react';
import '../content.css';
import './final.css';
import Categories from '../category/Categories';
import { table } from '../../../data/final-table';

const Final = () => {
  return (
    <main className='final'>
      <section className='final-container'>
        <div className='final-heading'>
          <img className='final-banner' src='/assets/final-info-img.jpg' />
          <p className='final-heading--head1'>
            ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!
          </p>
          <p className='final-heading--head2'>
            The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
            პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
          </p>
          <div className='final-heading-info'>
            <div>
              <div className='final-heading-neon'></div>15-დან 21 მაისის ჩათვლით
              მალტა პოკერის ფესტივალს უმასპინძლებს
            </div>
          </div>
        </div>
        <Categories />
      </section>
      <div className='cash'>
        <section className='content-header round-header'>
          <div className='neon'></div>
          <h3 className='content-header-main'>
            ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ
          </h3>
        </section>
        <section className='content-body has-round-header'>
          <div className='final-body'>
            <aside className='final-left'>
              <div className='cell final-left-1'>
                <img
                  id='final-tkt'
                  src='/assets/poker-item-1-ticket-icon.png'
                />
                <p className='cell-p--large'>“Cashgame Highrollers” -</p>
                <p className='cell-p--small'>1 საგზური</p>
              </div>
              <div className='cell final-left-1'>
                <img
                  id='final-tkt'
                  src='/assets/poker-item-1-ticket-icon.png'
                />
                <p className='cell-p--large'>“Cashgame Highrollers” -</p>
                <p className='cell-p--small'>1 საგზური</p>
              </div>
              <div className='cell final-left-1'>
                <img
                  id='final-tkt'
                  src='/assets/poker-item-1-ticket-icon.png'
                />
                <p className='cell-p--large'>„Tournament Sharks“ -</p>
                <p className='cell-p--small'>1 საგზური</p>
              </div>
            </aside>
            <aside className='final-right'>
              <div className='cell final-right-1'>
                <img
                  id='final-tkt'
                  src='/assets/poker-item-1-ticket-icon.png'
                />
                <p className='cell-p--large'>„The Festival in Malta, GTD“</p>
                <p className='cell-p--small'>A კატეგორიის 1 საგზური</p>
                <p className='cell-p--small'>B კატეგორიის 1 საგზური</p>
                <p className='cell-p--small'>
                  ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                  ბაი-ინის გადახდით.
                </p>
              </div>
              <div className='cell final-right-1'>
                <img
                  id='final-tkt'
                  src='/assets/poker-item-1-ticket-icon.png'
                />
                <p className='cell-p--large'>„The Lord of the Rings“</p>
                <p className='cell-p--small'>C კატეგორიის 1 საგზური</p>
                <p className='cell-p--small'>
                  ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                  ბაი-ინის გადახდით.
                </p>
              </div>
            </aside>
          </div>
          <p className='final-info'>
            * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
          </p>
          <p className='final-info'>
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით.
          </p>
        </section>
      </div>
      <section className='cash mystical'>
        <section className='content-header round-header'>
          <div className='neon'></div>
          <h3 className='content-header-main'>
            <img
              className='mystical-key-img'
              src='/assets/mystical-key.png'
            ></img>
          </h3>
        </section>
        <section className='content-body'>
          <p className='mystical-heading'>
            მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
            მიიღებენ საიდუმლო გასაღებს
          </p>
          <div className='final-table-container'>
            <section className='final-table'>
              {table.map((item, index) => (
                <div key={index} className='final-table-row'>
                  <div className='final-table-index'>{index + 1}</div>
                  <div className='final-table-nam'>{item.name}</div>
                </div>
              ))}
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Final;
