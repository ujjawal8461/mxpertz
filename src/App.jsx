import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState(''); 

  const getData = async () => {
    try {
      const response = await axios.get('https://child.onrender.com/api/sciencefiction');
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  
  const filteredData = data && data.filter(item => {
    if (!filter) return true; 
    return item.Status && item.Status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div>
      <h1>Science Fiction Data</h1>

      <div className="filter-buttons">
        <button className="filter-button progress" onClick={() => setFilter('in Progress')}>Progress</button>
        <button className="filter-button new" onClick={() => setFilter('New')}>New</button>
        <button className="filter-button completed" onClick={() => setFilter('Completed')}>Completed</button>
        <button className="filter-button clear" onClick={() => setFilter('')}>Clear Filter</button> 
      </div>

      {filteredData && (
        <div className='card-container'>
          {filteredData.map((item, index) => (
            <Card
              key={index}
              title={item.Title}
              status={item.Status || 'Unknown'} 
              image={item.Image.length > 0 ? item.Image[0] : null}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
