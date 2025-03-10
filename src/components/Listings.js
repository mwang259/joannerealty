import React, { useState, useEffect } from 'react';

function Listings() {
  const listingsData = [
    { id: 1, address: '914 Alvarez Lane', price: '$2,800/mth', img: '/images/services-room.jpg' },
    { id: 2, address: '943 Fletcher Circle', price: '$2,800/mth', img: '/images/services-room.jpg' },
    { id: 3, address: '539 Peerless Street', price: '$1,280,000', img: '/images/services-room.jpg' },
    { id: 4, address: '656 Parade Drive', price: '$878,000', img: '/images/services-room.jpg' },
    { id: 5, address: '82 Hansen Avenue', price: '$1,200,000', img: '/images/services-room.jpg' },
    { id: 6, address: '552 Silvertip Lane', price: '$2,350/mth', img: '/images/services-room.jpg' },
    { id: 7, address: '123 Maple Street', price: '$1,500,000', img: '/images/services-room.jpg' },
    { id: 8, address: '456 Oak Avenue', price: '$3,200/mth', img: '/images/services-room.jpg' },
    { id: 9, address: '333 Alvarez Lane', price: '$2,800/mth', img: '/images/services-room.jpg' },
    { id: 10, address: '444 Fletcher Circle', price: '$2,800/mth', img: '/images/services-room.jpg' },
    { id: 11, address: '555 Peerless Street', price: '$1,280,000', img: '/images/services-room.jpg' },
    { id: 12, address: '666 Parade Drive', price: '$878,000', img: '/images/services-room.jpg' },
    { id: 13, address: '777 Hansen Avenue', price: '$1,200,000', img: '/images/services-room.jpg' },
    { id: 14, address: '888 Silvertip Lane', price: '$2,350/mth', img: '/images/services-room.jpg' },
    { id: 15, address: '999 Maple Street', price: '$1,500,000', img: '/images/services-room.jpg' },
    { id: 16, address: '001 Oak Avenue', price: '$3,200/mth', img: '/images/services-room.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4; // 每页显示 4 个完整卡片
  const totalPages = Math.ceil(listingsData.length / cardsPerPage);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 10000); // 每 5 秒切换一次

    return () => clearInterval(interval); // 清理定时器
  }, [totalPages]);

  // 手动点击分页块切换
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="listings">
      <div className="animate-fade-in">
        <h2>Living in Ottawa</h2>
        <div className="listings-grid-wrapper">
          <div
            className="listings-grid"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}
          >
            {listingsData.map((listing) => (
              <div key={listing.id} className="listing-card">
                <img src={listing.img} alt={listing.address} />
                <p>{listing.address}</p>
                <p className="price">{listing.price}</p>
                <p>Royal LePage Team Realty</p>
              </div>
            ))}
          </div>
        </div>
        {/* 分页块 */}
        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <div className="view-more">
          <button className="view-more-btn">VIEW MORE</button>
        </div>
      </div>
    </section>
  );
}

export default Listings;