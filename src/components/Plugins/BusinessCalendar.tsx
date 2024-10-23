import { Card, LinkButton, TagList } from '@grafana/ui';
import React from 'react';

/**
 * Business Calendar
 */
export const BusinessCalendar: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Business Calendar</Card.Heading>
      <Card.Description>
        Displays events in a stylish calendar format. The data can come from various data sources.
      </Card.Description>
      <Card.Figure>
        <a target="_blank" rel="noreferrer" href="https://volkovlabs.io/plugins/business-calendar/">
          <svg width="40" height="40" viewBox="0 0 310 322" fill="none">
            <path d="M0.530273 44.5103H309.954V321.606H0.530273V44.5103Z" fill="#9D70F9" />
            <path d="M0.530273 44.5103H309.954V118.402H0.530273V44.5103Z" fill="#FF5656" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.352 0.635742V56.0548H58.2607V0.635742H81.352Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M252.225 0.635742V56.0548H229.134V0.635742H252.225Z"
              fill="black"
            />
            <rect x="23.624" y="136.875" width="27.7096" height="27.7096" fill="white" />
            <rect x="102.133" y="136.875" width="27.7096" height="27.7096" fill="white" />
            <rect x="180.644" y="136.875" width="27.7096" height="27.7096" fill="white" />
            <rect x="259.152" y="136.875" width="27.7096" height="27.7096" fill="white" />
            <rect x="23.624" y="206.147" width="27.7096" height="27.7096" fill="white" />
            <rect x="102.133" y="206.147" width="27.7096" height="27.7096" fill="white" />
            <rect x="180.644" y="206.147" width="27.7096" height="27.7096" fill="white" />
            <rect x="259.152" y="206.147" width="27.7096" height="27.7096" fill="white" />
            <rect x="23.624" y="275.421" width="27.7096" height="27.7096" fill="white" />
            <rect x="102.133" y="275.421" width="27.7096" height="27.7096" fill="white" />
            <rect x="180.644" y="275.421" width="27.7096" height="27.7096" fill="white" />
            <rect x="259.152" y="275.421" width="27.7096" height="27.7096" fill="white" />
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
          href="https://volkovlabs.io/plugins/business-calendar/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/business-calendar"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/"
        >
          Grafana Catalog
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
