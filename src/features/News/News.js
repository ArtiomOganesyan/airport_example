import React from 'react';
import './news.css';

import news1 from '../../assets/news/1.jpg';
import news2 from '../../assets/news/2.jpg';
import news3 from '../../assets/news/3.jpg';
import news4 from '../../assets/news/4.jpg';
import news5 from '../../assets/news/5.jpg';
import news6 from '../../assets/news/6.jpg';
import news7 from '../../assets/news/7.jpg';
import news8 from '../../assets/news/8.jpg';
import news9 from '../../assets/news/9.jpg';

const titles = [
  'Lorem, ipsum',
  'Lorem, ipsum dolor',
  'Lorem ipsum dolor sit',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet consectetur',
];

const newsImageArr = [
  news1, news2, news3, news4, news5, news6, news7, news8, news9,
];

export default function News() {
  const newsArr = new Array(9).fill('').map(() => ({
    title: titles[Math.floor(Math.random() * titles.length)],
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quo harum? Optio et nihil odit, recusandae non esse consectetur eum?',
    photo: newsImageArr[Math.floor(Math.random() * 9)],
  }));

  return (
    <div className="news">
      <h2>News</h2>
      <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
      <div className="news_container">
        {newsArr.map((news) => (
          <div key={+Math.random()} className="news_body">
            <h5>{news.title}</h5>
            <div>
              <p>{news.text}</p>
              <button type="button">{'>>'}</button>
            </div>
            <img src={news.photo} alt="news" />
          </div>
        ))}
      </div>
    </div>

  );
}
