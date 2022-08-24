import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Card from './component/Card'
import './App.css';

const App = () => {
  const [info, setInfo] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = async()=>{
    const req = await axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${process.env.React_App_ACCESS_KEY}&per_page=20`
      )
      .catch((err) => console.log(err));
    const res = req.data.results;
    setInfo(res);
    setText('');
  }

  return (
    <div className="App_container">
      <div className="search_container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div className="display_image">
        {info.map((data, index) => {
          const { likes, urls, user } = data;
          return <Card key={index} like={likes} url={urls} user={user}/>;
        })}
      </div>
    </div>
  );
}

export default App
