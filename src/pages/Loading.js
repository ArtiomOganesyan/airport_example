import React from 'react';
import spinner from '../assets/loader.gif';
import './loading.css';

export default function Loading() {
  return (
    <div className="loading"><img src={spinner} alt="spinner" /></div>
  );
}
