

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccordionComponent from '../../components/AccordionComponent/AccordionComponent';
import TableComponent from '../../components/TableComponent/TableComponent';
import './UserContainer.css';
import { fetchRoles } from '../../Redux/actions/FetchActions';
import {columns} from './TableColumns';

const Users = () => {
  const dispatch = useDispatch();
  const roles = useSelector(state => state.roles.roles);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const accordionData = [
    {
      key: '1',
      header: 'Role Management',
      content: (
        <TableComponent data={roles} columns={columns} />
        
      ),
    },
    
    {
      key: '2',
      header: 'User Manager',
    },
  ];

  return (
    <div className="users-container">
      <AccordionComponent accordionData={accordionData} />
    </div>
  );
};

export default Users;
