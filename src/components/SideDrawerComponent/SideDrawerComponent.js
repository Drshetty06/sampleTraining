import React from 'react';
import { Layout, Menu } from 'antd';
import './SideDrawerComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const { Sider } = Layout;


const SideDrawerComponent = () => {
    return (
      <div class="drawer">
        <Sider width={250}  className="side-drawer">
          <Menu mode="inline" className="compartments">
            <Menu.Item key="1">
              <FontAwesomeIcon icon={faCircle} className="icon" />
              <span className="compartment-name">User Details</span>
            </Menu.Item>
            <Menu.Item key="2">
              <FontAwesomeIcon icon={faCircle} className="icon " />
              <span className="compartment-name">Account Details</span>
            </Menu.Item>
            <Menu.Item key="3">
              <FontAwesomeIcon icon={faCircle} className="icon" />
              <span className="compartment-name">Onboarding</span>
            </Menu.Item>
            <Menu.Item key="4">
              <FontAwesomeIcon icon={faCircle} className="icon" />
              <span className="compartment-name">System Details</span>
            </Menu.Item>
            <Menu.Item key="5">
              <FontAwesomeIcon icon={faCircle} className="icon" />
              <span className="compartment-name">Batch Process</span>
            </Menu.Item>
            <Menu.Item key="6">
              <FontAwesomeIcon icon={faCircle} className="icon" />
              <span className="compartment-name">Reports</span>
            </Menu.Item>
            <Menu.Item key="7">
              <FontAwesomeIcon icon={faCircle} className="icon" />
              <span className="compartment-name">Users</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  };
  
  export default SideDrawerComponent;
