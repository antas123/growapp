import React from 'react';
import Sidebar from '@/components/Sidebar';

const Layout = ({ children }) => {
  return (
    <Sidebar props={children} />
  );
};

export default Layout;
