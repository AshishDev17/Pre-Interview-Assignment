import React from 'react';

import './Card.scss';

const Card = (props) => {
  const { key, item } = props;
  return(
    <div key={key} className="flex-row-item">
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
};

export default Card;
