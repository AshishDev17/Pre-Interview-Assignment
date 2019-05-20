import React, { useState, useEffect} from 'react';
import Card from './Card';
import { projectData } from './ProjectData';

import './App.scss';

const App = () => {
  const [testData, setTestData] = useState(projectData);
  const [selectedValue, setSelectedValue] = useState('');

  const updateSortedData = () => {
    let updatedTestData;
    if(selectedValue === 'asc') {
      updatedTestData = [...testData.sort((item1, item2) => item1.Price - item2.Price)];
    } else if (selectedValue === 'desc') {
      updatedTestData = [...testData.sort((item1, item2) => item2.Price - item1.Price)];
    } else {
      updatedTestData = [...projectData];
    }

    setTestData(updatedTestData);
  };

  useEffect(() => {
    updateSortedData();
  }, [selectedValue]);

  return (
    <div className="container">
      <div className="sort-options-container">
        <label>Sort Items:</label>
        <select className="sort-drop-down" value={selectedValue}
        onChange={e =>setSelectedValue(e.target.value)}
        >
          <option value="">Default Items</option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>
      </div>
      <div className="flex-row">
        {
          testData.map(item => {
            return (
                <Card key={item.id} item={item}/>
            );
          })
        }
      </div>
    </div>
  );
};

export default App;
