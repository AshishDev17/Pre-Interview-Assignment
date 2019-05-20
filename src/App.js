import React, { useState, useEffect} from 'react';
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
              <div key={item.id} className="flex-row-item">
                <div className="item-container">
                  <div className="item-image">
                    {
                      item.showBridge
                      ? <img src="http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg" alt="bridge" className="item-image-bridge" />
                      : <div>
                        <img src="http://res.cloudinary.com/bguggie/image/upload/v1425514882/darktiles_bg_gike55.jpg" alt="dark-tile" className="item-image-tile" />
                        <img src="http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png" alt="place-holder" className="item-image-place-holder" />
                      </div>
                    }
                  </div>
                  <div className="item-content">
                    <div className="item-heading">{item.Heading}</div>
                    <div className="item-sub-heading">{item.Subheading}</div>
                  </div>
                  <div className="item-footer">
                    <div className="line-break"/>
                    <div className="item-price">{Number(item.Price).toLocaleString('en')}</div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default App;
