import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ProductCard = ({ data }) => {
  return (
    <div className="col-sm">
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-body">
          <Link to={`/product/${data.id}`}>
            <h5 className="card-title">{data.name}</h5>
          </Link>
          <p className="card-text">{data.description}</p>
          <div
            className="priceInfo"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              className="mybadges"
              style={{
                marginRight: '10px',
                color: 'black',
                backgroundColor: 'white',
                padding: '2px 8px',
                borderRadius: '5px',
              }}
            ></div>
            <div style={{ color: '#999999', textDecoration: 'line-through' }}>
              {data.display_normal_price}
            </div>
          </div>
          <h5 style={{ fontWeight: 'bold' }}>{data.display_price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
