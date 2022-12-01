import React from 'react';
import './news.css';

const titles = [
  'Lorem, ipsum',
  'Lorem, ipsum dolor',
  'Lorem ipsum dolor sit',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet consectetur',

];

export default function News() {
  const newsArr = new Array(9).fill('').map(() => ({
    title: titles[Math.floor(Math.random() * titles.length)],
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quo harum? Optio et nihil odit, recusandae non esse consectetur eum?',
    photo: Math.floor(Math.random() * 9 + 1),
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
            <img src={`/assets/news/${news.photo}.jpg`} alt="news" />
          </div>
        ))}
      </div>
    </div>

  );
}
