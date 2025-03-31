// backend/server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 5000;

// 加载环境变量
dotenv.config();

// 中间件
app.use(cors());
app.use(express.json());

// 配置 Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// 处理表单提交
app.post('/save-submission', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    propertyType,
    size,
    bedrooms,
    bathrooms,
    garage,
    yearBuilt,
    features,
    purpose,
    howHeard,
    agreeToContact,
  } = req.body;

  const createdAt = new Date().toISOString();

  // 直接发送邮件通知
  const mailOptions = {
    from: email,
    to: 'wmyuan0423@gmail.com',
    subject: `新的房屋评估表单提交 - ${firstName} ${lastName}`,
    text: `
      名字: ${firstName}
      姓氏: ${lastName}
      邮箱: ${email}
      电话: ${phone}
      地址: ${address}
      城市: ${city}
      物业类型: ${propertyType}
      面积: ${size}
      卧室数量: ${bedrooms}
      浴室数量: ${bathrooms}
      车库数量: ${garage}
      建造年份: ${yearBuilt}
      特点: ${features || '无'}
      评估目的: ${purpose}
      如何知道我们: ${howHeard}
      同意联系: ${agreeToContact ? '是' : '否'}
      提交时间: ${createdAt}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('邮件发送失败:', error);
      res.status(500).json({ message: '邮件发送失败' });
    } else {
      console.log('邮件发送成功:', info.response);
      res.status(200).json({ message: '信息已成功发送！' });
    }
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});