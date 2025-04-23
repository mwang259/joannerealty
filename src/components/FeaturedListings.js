// src/components/FeaturedListings.js
import React from 'react';
import './featured-listings.css'; // Separate CSS file for this page
import Social from './Social';

const listingsData = [
  // {
  //   id: 1,
  //   image: '/images/140_springhurst_ave_3-4.jpg',
  //   price: '$639,000',
  //   address: '905 - 1300 TITAN',
  //   city: 'Ottawa',
  //   beds: 2,
  //   baths: 2,
  //   link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  // },
  // {
  //   id: 2,
  //   image: '/images/140_springhurst_ave_3-10.jpg',
  //   price: '$279,900',
  //   address: '130 PRINCE OF WALES DRIVE',
  //   city: 'Ottawa',
  //   beds: 2,
  //   baths: 1,
  //   link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  // },
  // {
  //   id: 3,
  //   image: '/images/140_springhurst_ave_3-2.jpg',
  //   price: '$524,900',
  //   address: '254 FLANNERY DRIVE',
  //   city: 'Ottawa',
  //   beds: 3,
  //   baths: 2,
  //   link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  // },

];

const FeaturedListings = () => {
  return (
    <div>
      <div className="featured-listings">
        <h1>Featured Listings</h1>
        <div className="feartured-listings-grid">
          {listingsData.map((listing) => (
            <div key={listing.id} className="feartured-listing-card">
              <img src={listing.image} alt={listing.address} />
              <div className="feartured-listing-info">
                <h3>{listing.price}</h3>
                <p>{listing.address}</p>
                <p>{listing.city}</p>
                <div className="feartured-listing-details">
                  <span>{listing.beds} 🛏️</span>
                  <span>{listing.baths} 🛁</span>
                </div>
                <a href={listing.link} target="_blank" rel="noopener noreferrer">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default FeaturedListings;