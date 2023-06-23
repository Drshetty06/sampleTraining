import React from 'react';
import { Layout, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/actions/LoginActions';
import './HeaderComponent.css';

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout className="dashboard">
      <Header className="header">
        <Title level={3} className="header-title">
          LMS PORTAL
        </Title>
        <div class="row">
          <div className="logout-info">
            <span>Sidhant Kumar</span>
            <span onClick={handleLogout}> | Logout</span>
          </div>
          <div className="last-login">Last Login: 29/05/2021 16:48:32</div>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
