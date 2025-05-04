// src/components/HomeEvaluationForm.js
// import React, { useState } from 'react';
import './homeevaluationform.css';
import Social from './Social';
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';


function HomeEvaluationForm() {
  const { content } = useContext(LanguageContext);

  return (
    <div>
      <section className="container-full home-evaluation-page">
        <div className="home-evaluation-container">
          {/* <h1>房屋评估表格</h1> */}
          {/* <p>
            填写房屋评估表单(<a href='https://docs.google.com/forms/d/e/1FAIpQLSfIWjRTcjK3uccyLJYnUPK5wN2hg4ekEnQZPV-U7Qd7m-KKdA/viewform?usp=dialog'>LINK</a>)，获取您房屋在当前市场的免费比较市场分析报告。报告将在24小时内发送给您，不仅能帮助您评估房屋价值，还能提供未来社区发展的更多见解！
            
          </p> */}
          <h1>{content.evaluation_title}</h1>
          <p>
            {content.evaluation_front}(<a href='https://docs.google.com/forms/d/e/1FAIpQLSfIWjRTcjK3uccyLJYnUPK5wN2hg4ekEnQZPV-U7Qd7m-KKdA/viewform?usp=dialog'> LINK </a>)
            {content.evaluation_back}
            
          </p>
          
        </div>
      </section>
      <Social />
    </div>
  );
}

export default HomeEvaluationForm;