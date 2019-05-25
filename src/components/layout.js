import React from 'react';
import Header from '../components/header';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Header title={title} />
      {children}
    </>
  );
};
