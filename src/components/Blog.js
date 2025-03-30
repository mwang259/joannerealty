// src/components/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '2025年渥太华房地产市场分析：支持力度强劲',
      excerpt: '渥太华房地产市场在2025年持续升温，政策支持和优质房源推动市场发展。',
      date: 'March 15, 2025',
    },
    {
      id: 2,
      title: '渥太华首次购房者必知的5个技巧',
      excerpt: '为首次购房者提供实用建议，助你在渥太华找到理想的家。',
      date: 'March 10, 2025',
    },
    {
      id: 3,
      title: '为什么渥太华是房地产投资的最佳选择',
      excerpt: '渥太华稳定的经济和高质量生活使其成为投资热点。',
      date: 'March 5, 2025',
    },
    {
      id: 4,
      title: '如何快速出售你的渥太华房产',
      excerpt: '学习最佳的房屋布置技巧，让你的房产在渥太华市场脱颖而出。',
      date: 'February 28, 2025',
    },
    {
      id: 5,
      title: '科技如何改变渥太华房地产市场',
      excerpt: '从虚拟看房到AI分析，科技正在重塑渥太华的房地产行业。',
      date: 'February 20, 2025',
    },
    {
      id: 6,
      title: '渥太华的可持续生活：环保住宅趋势',
      excerpt: '探索如何在渥太华打造环保节能的家。',
      date: 'February 15, 2025',
    },
    {
      id: 7,
      title: '与渥太华房地产经纪合作的益处',
      excerpt: '专业经纪人如何为你节省时间和金钱。',
      date: 'February 10, 2025',
    },
    {
      id: 8,
      title: '提升渥太华房产价值的装修建议',
      excerpt: '简单装修即可大幅提升你的房产市场价值。',
      date: 'February 5, 2025',
    },
    {
      id: 9,
      title: '渥太华购房者的按揭流程解析',
      excerpt: '一步步了解如何在渥太华申请按揭贷款。',
      date: 'January 30, 2025',
    },
    {
      id: 10,
      title: '远程工作如何影响渥太华的住房选择',
      excerpt: '远程工作让更多人选择渥太华的郊区和乡村生活。',
      date: 'January 25, 2025',
    },
  ];

  return (
    <section className="container-full blog-page">
      <div className="blog-header">
        <h1>我们的博客</h1>
        <p>了解渥太华房地产市场的最新趋势、技巧和见解。</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more-btn">
                阅读更多
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;