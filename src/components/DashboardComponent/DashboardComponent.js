import React from 'react';
import { Layout, Typography } from 'antd';
import './DashboardComponent.css';

const { Header } = Layout;
const { Title } = Typography;

const DashboardComponent = () => {
  return (
    <Layout className="dashboard">
      <Header className="header">
        <Title level={3} className="header-title">
          LMS PORTAL
        </Title>
        <div class="row">
        <div className="logout-info">
          <span>Sidhant Kumar</span>
          <span>       |    Logout</span>
        </div>
        <div className="last-login">Last Login: 29/05/2021 16:48:32</div>
        </div>
       
      </Header>
      
    </Layout>
  );
};

export default DashboardComponent;
