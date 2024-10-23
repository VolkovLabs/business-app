import { Card, LinkButton, TagList } from '@grafana/ui';
import React from 'react';

/**
 * Business News
 */
export const BusinessNews: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Business News</Card.Heading>
      <Card.Description>
        Retrieves RSS and Atom feeds and allows visualizing them using Business Text and other panels.
      </Card.Description>
      <Card.Figure>
        <a target="_blank" rel="noreferrer" href="https://volkovlabs.io/plugins/business-news/">
          <svg width={40} height={40} viewBox="0 0 65 65">
            <path
              d="M1.89882e-05 0C8.50048 1.01367e-07 16.9177 1.67429 24.7711 4.92728C32.6245 8.18026 39.7603 12.9482 45.771 18.959C51.7818 24.9697 56.5497 32.1055 59.8027 39.9589C63.0557 47.8123 64.73 56.2295 64.73 64.73H51.9693C51.9693 57.9053 50.6251 51.1474 48.0134 44.8422C45.4017 38.537 41.5737 32.8079 36.7479 27.9821C31.9221 23.1563 26.193 19.3283 19.8878 16.7166C13.5826 14.1049 6.82472 12.7607 1.8836e-05 12.7607L1.89882e-05 0Z"
              fill="#9D70F9"
            />
            <path
              d="M4.14996e-05 21.7185C5.64839 21.7185 11.2414 22.831 16.4598 24.9925C21.6782 27.1541 26.4198 30.3223 30.4138 34.3163C34.4078 38.3103 37.576 43.0518 39.7375 48.2702C41.899 53.4886 43.0115 59.0816 43.0115 64.73H30.6377C30.6377 60.7066 29.8452 56.7226 28.3056 53.0055C26.7659 49.2883 24.5091 45.9109 21.6641 43.0659C18.8192 40.2209 15.4417 37.9642 11.7246 36.4245C8.00744 34.8848 4.02344 34.0923 4.1352e-05 34.0923L4.14996e-05 21.7185Z"
              fill="#9D70F9"
            />
            <path
              d="M18.0745 55.6928C18.0745 60.684 14.0284 64.7301 9.03725 64.7301C4.04611 64.7301 0 60.684 0 55.6928C0 50.7017 4.04611 46.6556 9.03725 46.6556C14.0284 46.6556 18.0745 50.7017 18.0745 55.6928Z"
              fill="#111111"
            />
          </svg>
        </a>
      </Card.Figure>
      <Card.Tags>
        <TagList tags={['Data Source']} />
      </Card.Tags>
      <Card.Actions>
        <LinkButton
          variant="primary"
          icon="book-open"
          target="_blank"
          href="https://volkovlabs.io/plugins/business-news/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/business-news"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/"
        >
          Grafana Catalog
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
