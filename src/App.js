import React, { useState } from 'react';
import { projectData } from './ProjectData';

import './App.scss';

const App = () => {
  const [testData, setTestData] = useState(projectData);

  return (
    <div className="container">
      <div class="flex-row">
        {
          projectData.map(item => {
            return (
              <div key={item.id} className="flex-row-item">
                <div className="item-container">
                  <div className="item-image">
                    <img alt={`thumbnail-${item.id}`}/>
                  </div>
                  <div className="item-content">
                    <div className="item-heading">{item.Heading}</div>
                    <div className="item-sub-heading">{item.Subheading}</div>
                    <hr />
                    <div className="item-price">{item.Price}</div>
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
