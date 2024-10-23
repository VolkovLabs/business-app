import { Card, LinkButton, TagList } from '@grafana/ui';
import React from 'react';

/**
 * Business Table
 */
export const BusinessTable: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Business Table</Card.Heading>
      <Card.Description>Allows to simplify data visualization in table format.</Card.Description>
      <Card.Figure>
        <a target="_blank" rel="noreferrer" href="https://volkovlabs.io/plugins/business-table/">
          <svg width={40} height={40} viewBox="0 0 104 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50.6396" y="14.9995" width="25" height="20" fill="#C5A8FF" />
            <rect x="3.15918" y="14.9995" width="45" height="20" fill="#A67CFF" />
            <rect x="50.6396" y="60.9995" width="26" height="20" fill="#C5A8FF" />
            <rect x="50.6396" y="35.9995" width="25" height="23" fill="#C5A8FF" />
            <rect x="3.15918" y="58.9995" width="45" height="24" fill="#A67CFF" />
            <rect x="3.15918" y="34.9995" width="45" height="24" fill="#A67CFF" />
            <line x1="1.65918" y1="1.99951" x2="1.65918" y2="82.9995" stroke="#6133BC" strokeWidth="3" />
            <line x1="49.6592" y1="2.99951" x2="49.6592" y2="83.9995" stroke="#6133BC" strokeWidth="3" />
            <line x1="101.659" y1="-0.000488347" x2="101.659" y2="83.9995" stroke="#6133BC" strokeWidth="3" />
            <line x1="0.15918" y1="82.4995" x2="100.159" y2="82.4995" stroke="#6133BC" strokeWidth="3" />
            <line x1="0.15918" y1="1.49951" x2="100.159" y2="1.4995" stroke="#6133BC" strokeWidth="3" />
            <line x1="0.15918" y1="13.4995" x2="100.159" y2="13.4995" stroke="#6133BC" strokeWidth="3" />
            <line x1="0.15918" y1="35.4995" x2="100.159" y2="35.4995" stroke="#6133BC" strokeWidth="3" />
            <line x1="0.15918" y1="60.4995" x2="100.159" y2="60.4995" stroke="#6133BC" strokeWidth="3" />
            <line x1="75.9795" y1="2.99951" x2="75.9795" y2="83.9995" stroke="#6133BC" strokeWidth="3" />
            <rect x="1.47949" y="2.99951" width="99" height="12" fill="#6133BC" />
          </svg>
        </a>
      </Card.Figure>
      <Card.Tags>
        <TagList tags={['Panel']} />
      </Card.Tags>
      <Card.Actions>
        <LinkButton
          variant="primary"
          icon="book-open"
          target="_blank"
          href="https://volkovlabs.io/plugins/business-table/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/business-table"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/volkovlabs-table-panel/"
        >
          Grafana Catalog
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
