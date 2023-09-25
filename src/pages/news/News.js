import React, { useState, useEffect } from 'react';
import Styles from "./News.module.css";

function News() {
  const [news, setNews] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('in'); // Default to India

  const countryOptions = [
    { label: 'India', value: 'in' },
    { label: 'USA', value: 'us' },

  ];

  const handleRadioChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    const apiKey = '9e4ec1d478be4364aa2533b896b22f9a'; // Replace with your News API key
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey, // Replace 'YOUR_API_KEY' with your actual API key
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, [selectedCountry]);

  return (
    <div className={Styles.news}>
      <h1>Top Headlines</h1>
      <div className={Styles.radiodiv}>
        <p>Select a country:</p>
        {countryOptions.map((option) => (
          <label key={option.value} className={Styles.radio}>
            <input
              type="radio"
              value={option.value}
              checked={selectedCountry === option.value}
              onChange={handleRadioChange}
            />
            {option.label}
          </label>
        ))}
        </div>
        <div className={Styles.api}>
          {news &&
                news.map((p) =>
            p.urlToImage && p.title && p.description && p.url && (
            <div className={Styles.card}>
              <div className={Styles.book}>
                <h2>{p.title}</h2>
                <p>
                {p.description}
                </p>
                <button className={Styles.sh_btn}><a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read more
                            </a></button>
                            <div className={Styles.spangrp}>
                            <span className={Styles.span}>{p.source.name}</span>
                          <span className={Styles.span}>{p.publishedAt}</span>
              </div></div>
              <div className={Styles.cover}>
                <div className={Styles.coverFront}>
                    <div>
                      <div className={Styles.imagediv}>
                    <img className={Styles.sh_img} src={p.urlToImage} alt={p.title} />
                    </div>
                    <h5>{p.title}</h5>
                    </div>
                </div>
                <div className={Styles.coverBack}></div>
              </div>
        </div>
 ))}
</div>
</div>   
  );
}
  

export default News;