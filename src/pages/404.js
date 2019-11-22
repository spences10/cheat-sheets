import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';

export default () => (
  <Layout>
    <h1>That's a nope!</h1>
    <Link to="/">Go to the homepage</Link>
  </Layout>
);
