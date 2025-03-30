// src/components/FeaturedListings.js
import React from 'react';
import './featured-listings.css'; // Separate CSS file for this page

const listingsData = [
  {
    id: 1,
    image: 'https://cdn.realtor.ca/listing/TS638766878115800000/reb76/highres/1/x11999381_1.jpg',
    price: '$539,000',
    address: '905 - 1300 TITAN',
    city: 'Ottawa',
    beds: 2,
    baths: 2,
    link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  },
  {
    id: 2,
    image: 'https://cdn.realtor.ca/listing/TS638766878115800000/reb76/highres/1/x11999381_1.jpg',
    price: '$279,900',
    address: '130 PRINCE OF WALES DRIVE',
    city: 'Ottawa',
    beds: 2,
    baths: 1,
    link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  },
  {
    id: 3,
    image: 'https://cdn.realtor.ca/listing/TS638766878115800000/reb76/highres/1/x11999381_1.jpg',
    price: '$524,900',
    address: '254 FLANNERY DRIVE',
    city: 'Ottawa',
    beds: 3,
    baths: 2,
    link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  },
  // {
  //   id: 4,
  //   image: "https://cdn.realtor.ca/listing/TS638766878115800000/reb76/highres/1/x11999381_1.jpg",
  //   price: '$470,000',
  //   address: '13 CLIFFORD',
  //   city: 'Ottawa',
  //   beds: 3,
  //   baths: 3,
  //   link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  // },
  // {
  //   id: 5,
  //   image: 'https://via.placeholder.com/300x200',
  //   price: '$664,900',
  //   address: '2038 VINCENT STREET',
  //   city: 'Ottawa',
  //   beds: 3,
  //   baths: 2,
  //   link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  // },
  // {
  //   id: 6,
  //   image: 'https://via.placeholder.com/300x200',
  //   price: '$749,999',
  //   address: '352 FREEDOM PVT STREET',
  //   city: 'Ottawa',
  //   beds: 3,
  //   baths: 4,
  //   link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  // },
  // {
  //   id: 7,
  //   image: 'https://via.placeholder.com/300x200',
  //   price: '$719,900',
  //   address: '308 - 530 DE MAZENOD AVENUE',
  //   city: 'Ottawa',
  //   beds: 2,
  //   baths: 2,
  //   link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  // },
  // {
  //   id: 8,
  //   image: 'https://via.placeholder.com/300x200',
  //   price: '$269,900',
  //   address: '205 - 429 KENT STREET',
  //   city: 'Ottawa',
  //   beds: 1,
  //   baths: 1,
  //   link: 'https://www.realtor.ca/real-estate/27977844/634-expansion-road-ottawa-7711-barrhaven-half-moon-bay',
  // },
];

const FeaturedListings = () => {
  return (
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
  );
};

export default FeaturedListings;