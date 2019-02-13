import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';

const NotFoundTemplate = ({ data }) => {
  const {
    title,
    subtitle
  } = data.site.siteMetadata;

  return (
    <Layout title={`Hjelp! finner ikke det du leter etter! - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="WTF!! finner ikke dette...">
        <p>Du har funnet noe.. eller, det vil si, du har ikke funnet det.. og det har ikke jeg heller.. the sadness.</p>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default NotFoundTemplate;
