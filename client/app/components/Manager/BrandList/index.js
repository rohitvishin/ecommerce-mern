/**
 *
 * BrandList
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';

const BrandList = props => {
  const { brands, user } = props;

  return (
    <div className='b-list'>
      {brands.map((brand, index) => (
        <Link
          to={`/dashboard/brand/edit/${brand._id}`}
          key={index}
          className='d-block mb-3 p-4 brand-box'
        >
          <div className='d-flex align-items-center justify-content-between mb-2'>
            <h4 className='mb-0'>{brand.name}</h4>
          </div>
          <p className='brand-desc mb-2'>{brand.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default BrandList;
