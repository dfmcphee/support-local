import React from 'react';
import {graphql} from 'gatsby';
import Helmet from 'react-helmet';
import {
  Business,
  Container,
  Heading,
  Page,
  Section,
} from '../components';

import './index.css';

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {  
  const businessMarkup = edges.map(({node}) => {
    return (
      <Business
        key={node.id}
        name={node.frontmatter.name}
        description={node.frontmatter.description}
        cta={node.frontmatter.action}
        url={node.frontmatter.link}
      />
    );
  });
  
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Support Local</title>
        <link rel="canonical" href="https://supportlocal.guide" />
        <meta name="description" content="Directory of local businesses to support." />
        <meta name="keywords" content="local,business,support,help,pandemic" />
        <html lang="en" />
      </Helmet>
      <Container>
        <Heading>supportlocal.guide/ottawa</Heading>
      </Container>
      <Section>
        <Container>
          {businessMarkup}
        </Container>
      </Section>
    </Page>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___name] }) {
      edges {
        node {
          id
          frontmatter {
            name,
            description,
            link,
            action
          }
        }
      }
    }
  }
`

