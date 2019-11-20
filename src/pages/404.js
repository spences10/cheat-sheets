import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { H1 } from '../components/page-elements';

export default () => (
  <Layout>
    <H1>That's a nope!</H1>
    <Link to="/">Go to the homepage</Link>
  </Layout>
);
