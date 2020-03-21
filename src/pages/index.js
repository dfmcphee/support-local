import React from 'react';
import Helmet from 'react-helmet';
import {
  Business,
  Container,
  Heading,
  Page,
  Section,
} from '../components';

import './index.css';

const businesses = [
  {
    name: 'Black Squirrel Books',
    description: 'Selling surprise boxes of books in any genre.',
    cta: 'Shop',
    url: 'https://www.blacksquirrelbooks.ca'
  },
  {
    name: 'Springroll House Cafe',
    description: 'Authentic Vietnamese cuisine.',
    cta: 'Order',
    url: 'https://www.springrollhousecafe.com'
  },
  {
    name: 'Ministry of Coffee',
    description: 'Selling bags of great coffee beans.',
    cta: 'Shop',
    url: 'https://theministryofcoffee.com'
  },
];

export default () => {
  const businessMarkup = businesses.map(({name, description, cta, url}) => {
    return <Business key={url} name={name} description={description} cta={cta} url={url} />;
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

