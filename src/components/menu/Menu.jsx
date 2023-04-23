import React from 'react';
import './menu.css';
import { useState } from 'react';

import Cash from '../content/Cash';
import Spring from '../content/Spring';
import Final from '../content/Final/Final';

const renderContent = (choice) => {
  switch (choice) {
    case '1':
      return <Cash />;
    case '2':
      return <Spring />;
    case '3':
      return <Final />;
    default:
      return <Cash />;
  }
};

const Menu = () => {
  const [choice, setChoice] = useState('1');
  const menuItems = [
    { id: '1', date: '1 - 29 აპრილი', name: 'Cash Games' },
    { id: '2', date: '13 - 29 აპრილი', name: 'Spring Series' },
    { id: '3', date: '30 აპრილი', name: 'Final Stage' },
  ];
  return (
    <main className='menu'>
      <section className='menu-choice'>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={
              choice === item.id ? 'menu-item menu-chosen' : 'menu-item'
            }
            onClick={() => setChoice(item.id)}
          >
            <div
              className={
                choice === item.id ? 'item-date chosen-date' : 'item-date'
              }
            >
              {item.date}
            </div>
            <div
              className={
                choice === item.id ? 'item-name chosen-name' : 'item-name'
              }
            >
              {item.name}
            </div>
          </div>
        ))}
      </section>
      {renderContent(choice)}
    </main>
  );
};

export default Menu;
