// src/components/HomeEvaluationForm.js
import React, { useState } from 'react';
import './homeevaluationform.css';

function HomeEvaluationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    propertyType: '',
    size: '',
    bedrooms: '',
    bathrooms: '',
    garage: '',
    yearBuilt: '',
    features: '',
    purpose: '',
    howHeard: '',
    agreeToContact: false,
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('正在发送...');

    try {
      const response = await fetch('http://localhost:5000/save-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('信息已成功发送！');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          propertyType: '',
          size: '',
          bedrooms: '',
          bathrooms: '',
          garage: '',
          yearBuilt: '',
          features: '',
          purpose: '',
          howHeard: '',
          agreeToContact: false,
        });
      } else {
        setStatus('发送失败，请稍后再试。');
      }
    } catch (error) {
      setStatus('发送失败，请检查网络连接。');
    }
  };

  // 定义年份范围选项
  const yearBuiltOptions = [
    'Before 1950',
    '1950-1960',
    '1960-1970',
    '1970-1980',
    '1980-1990',
    '1990-2000',
    '2000-2005',
    '2005-2010',
    '2010-2015',
    '2015-2020',
    '2020+',
  ];

  return (
    <section className="container-full home-evaluation-page">
      <div className="home-evaluation-container">
        <h1>房屋评估表格</h1>
        <p>
          填写以下房屋评估表单，获取您房屋在当前市场的免费比较市场分析报告。报告将在24小时内发送给您，不仅能帮助您评估房屋价值，还能提供未来社区发展的更多见解！
        </p>
        <form onSubmit={handleSubmit} className="home-evaluation-form">
          <div className="form-section">
            <h2>1. 联系信息</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">名字 *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">姓氏 *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">邮箱地址 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">电话号码 *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>2. 物业信息</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="address">地址 *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">城市 *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="propertyType">物业类型 *</label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">请选择</option>
                  <option value="Single Family">独栋住宅</option>
                  <option value="Condo">公寓</option>
                  <option value="Townhouse">联排别墅</option>
                  <option value="Other">其他</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="size">面积 *</label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                >
                  <option value="">请选择</option>
                  <option value="Under 1000">1000平方英尺以下</option>
                  <option value="1000-2000">1000-2000平方英尺</option>
                  <option value="2000-3000">2000-3000平方英尺</option>
                  <option value="3000-4000">3000-4000平方英尺</option>
                  <option value="4000+">4000平方英尺以上</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>卧室数量 *</label>
                <div className="radio-group">
                  {[0, 1, 2, 3, 4, '5+'].map((value) => (
                    <label key={value}>
                      <input
                        type="radio"
                        name="bedrooms"
                        value={value}
                        checked={formData.bedrooms === value.toString()}
                        onChange={handleChange}
                        required
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>浴室数量 *</label>
                <div className="radio-group">
                  {[0, 1, 2, 3, 4, '5+'].map((value) => (
                    <label key={value}>
                      <input
                        type="radio"
                        name="bathrooms"
                        value={value}
                        checked={formData.bathrooms === value.toString()}
                        onChange={handleChange}
                        required
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>车库数量 *</label>
                <div className="radio-group">
                  {[0, 1, 2, 3, 4, '5+'].map((value) => (
                    <label key={value}>
                      <input
                        type="radio"
                        name="garage"
                        value={value}
                        checked={formData.garage === value.toString()}
                        onChange={handleChange}
                        required
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="yearBuilt">建造年份 *</label>
                <select
                  id="yearBuilt"
                  name="yearBuilt"
                  value={formData.yearBuilt}
                  onChange={handleChange}
                  required
                >
                  <option value="">请选择</option>
                  {yearBuiltOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="features">特点</label>
              <textarea
                id="features"
                name="features"
                value={formData.features}
                onChange={handleChange}
                placeholder="包括特殊功能、最近的装修等"
              />
            </div>
          </div>

          <div className="form-section">
            <h2>3. 其他信息</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="purpose">评估目的 *</label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                >
                  <option value="">请选择</option>
                  <option value="Selling">出售</option>
                  <option value="Refinancing">再融资</option>
                  <option value="Curiosity">好奇</option>
                  <option value="Other">其他</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="howHeard">您是如何知道我们的？ *</label>
                <select
                  id="howHeard"
                  name="howHeard"
                  value={formData.howHeard}
                  onChange={handleChange}
                  required
                >
                  <option value="">请选择</option>
                  <option value="Google">谷歌搜索</option>
                  <option value="Referral">朋友推荐</option>
                  <option value="Social Media">社交媒体</option>
                  <option value="Other">其他</option>
                </select>
              </div>
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="agreeToContact"
                  checked={formData.agreeToContact}
                  onChange={handleChange}
                  required
                />
                是的，我同意被联系并接收有用的电子邮件，我知道可以随时取消订阅。
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            提交
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
}

export default HomeEvaluationForm;