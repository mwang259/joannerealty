// import React, { useState, useEffect } from 'react';

// function Listings() {
//   const listingsData = [
//     { id: 1, address: '914 Alvarez Lane', price: '$2,800/mth', img: '/images/services-room.jpg' },
//     { id: 2, address: '943 Fletcher Circle', price: '$2,800/mth', img: '/images/services-room.jpg' },
//     { id: 3, address: '539 Peerless Street', price: '$1,280,000', img: '/images/services-room.jpg' },
//     { id: 4, address: '656 Parade Drive', price: '$878,000', img: '/images/services-room.jpg' },
//     { id: 5, address: '82 Hansen Avenue', price: '$1,200,000', img: '/images/services-room.jpg' },
//     { id: 6, address: '552 Silvertip Lane', price: '$2,350/mth', img: '/images/services-room.jpg' },
//     { id: 7, address: '123 Maple Street', price: '$1,500,000', img: '/images/services-room.jpg' },
//     { id: 8, address: '456 Oak Avenue', price: '$3,200/mth', img: '/images/services-room.jpg' },
//     { id: 9, address: '333 Alvarez Lane', price: '$2,800/mth', img: '/images/services-room.jpg' },
//     { id: 10, address: '444 Fletcher Circle', price: '$2,800/mth', img: '/images/services-room.jpg' },
//     { id: 11, address: '555 Peerless Street', price: '$1,280,000', img: '/images/services-room.jpg' },
//     { id: 12, address: '666 Parade Drive', price: '$878,000', img: '/images/services-room.jpg' },
//     { id: 13, address: '777 Hansen Avenue', price: '$1,200,000', img: '/images/services-room.jpg' },
//     { id: 14, address: '888 Silvertip Lane', price: '$2,350/mth', img: '/images/services-room.jpg' },
//     { id: 15, address: '999 Maple Street', price: '$1,500,000', img: '/images/services-room.jpg' },
//     { id: 16, address: '001 Oak Avenue', price: '$3,200/mth', img: '/images/services-room.jpg' },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsPerPage = 4; // 每页显示 4 个完整卡片
//   const totalPages = Math.ceil(listingsData.length / cardsPerPage);

//   // 自动轮播
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
//     }, 10000); // 每 5 秒切换一次

//     return () => clearInterval(interval); // 清理定时器
//   }, [totalPages]);

//   // 手动点击分页块切换
//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="container-listings">
//       <div className="containerlisting animate-fade-in">
//         <h2>Living in Ottawa</h2>
//         <div className="listings-grid-wrapper">
//           <div
//             className="listings-grid"
//             style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}
//           >
//             {listingsData.map((listing) => (
//               <div key={listing.id} className="listing-card">
//                 <img src={listing.img} alt={listing.address} />
//                 <p>{listing.address}</p>
//                 <p className="price">{listing.price}</p>
//                 <p>Royal LePage Team Realty</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* 分页块 */}
//         <div className="pagination-dots">
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <span
//               key={index}
//               className={`dot ${currentIndex === index ? 'active' : ''}`}
//               onClick={() => handleDotClick(index)}
//             ></span>
//           ))}
//         </div>
//         <div className="view-more">
//           <button className="view-more-btn">VIEW MORE</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Listings;

// src/components/Listings.js
import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Listings() {
  const { content } = useContext(LanguageContext);
  const listingsData = [
    {
      id: 1,
      image: '/images/services-room.jpg',
      description: 'Modern 3-Bedroom House in Downtown Ottawa',
      price: '$2,800/mth',
    },
    {
      id: 2,
      image: '/images/services-room.jpg',
      description: 'Cozy 2-Bedroom Condo with River View',
      price: '$450,000',
    },
    {
      id: 3,
      image: '/images/services-room.jpg',
      description: 'Spacious Family Home with Large Backyard',
      price: '$780,000',
    },
    {
      id: 4,
      image: '/images/services-room.jpg',
      description: 'Luxury Penthouse in Central Ottawa',
      price: '$1,200,000',
    },
    {
      id: 5,
      image: '/images/services-room.jpg',
      description: 'Charming Bungalow near Parks',
      price: '$520,000',
    },
    {
      id: 6,
      image: '/images/services-room.jpg',
      description: '552 Silvertip Lane',
      price: '$520,000',
    },
    {
      id: 7,
      image: '/images/services-room.jpg',
      description: '123 Maple Street',
      price: '$520,000',
    },
    {
      id: 8,
      image: '/images/services-room.jpg',
      description: '333 Alvarez Lane',
      price: '$520,000',
    },
    {
      id: 9,
      image: '/images/services-room.jpg',
      description: '888 Silvertip Lane',
      price: '$520,000',
    },
    {
      id: 10,
      image: '/images/services-room.jpg',
      description: '001 Oak Avenue',
      price: '$520,000',
    },
    {
      id: 11,
      image: '/images/services-room.jpg',
      description: '938 Silvertip Lane',
      price: '$520,000',
    },
    {
      id: 12,
      image: '/images/services-room.jpg',
      description: '998 Oak Avenue',
      price: '$520,000',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + cardsPerPage >= listingsData.length ? 0 : prevIndex + cardsPerPage
      );
    }, 5000); // 每5秒切换一次
    return () => clearInterval(interval);
  }, [listingsData.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index * cardsPerPage);
  };

  const totalPages = Math.ceil(listingsData.length / cardsPerPage);

  return (
    <section className="container-full">
      <div className="containerlisting">
        <h1>{content.listings_title}</h1>
        <div className="listings-grid-wrapper">
          <div
            className="listings-grid"
            style={{
              transform: `translateX(-${(currentIndex / cardsPerPage) * 100}%)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {listingsData.map((listing) => (
              <div className="listing-card" key={listing.id}>
                <img src={listing.image} alt={listing.description} />
                <p>{listing.description}</p>
                <p className="price">{listing.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex / cardsPerPage === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <div className="view-more">
          <button className="view-more-btn">{content.listings_view_more}</button>
        </div>
      </div>
    </section>
  );
}

export default Listings;
