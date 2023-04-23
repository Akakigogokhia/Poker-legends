import React from 'react';
import './categories.css';
import { a, b, c } from '../../../data/category';

const Categories = () => {
  return (
    <main className='categories'>
      <div className='category'>
        <div className='category-header'>
          <div className='category-header-neon'></div>
          <p>A კატეგორიის საგზურში შედის</p>
        </div>
        <div className='category-container'>
          {a.map((item, index) => (
            <div className='category-item' key={index}>
              <img src={item.icon} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='category'>
        <div className='category-header'>
          <div className='category-header-neon'></div>
          <p>B კატეგორიის საგზურში შედის</p>
        </div>
        <div className='category-container'>
          {b.map((item, index) => (
            <div className='category-item' key={index}>
              <img src={item.icon} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='category'>
        <div className='category-header'>
          <div className='category-header-neon'></div>
          <p>C კატეგორიის საგზურში შედის</p>
        </div>
        <div className='category-container'>
          {c.map((item, index) => (
            <div className='category-item' key={index}>
              <img src={item.icon} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Categories;
