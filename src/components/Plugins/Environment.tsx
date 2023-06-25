import React from 'react';
import { Card, LinkButton, TagList } from '@grafana/ui';

/**
 * Environment Data Source
 */
export const Environment: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Environment Data Source</Card.Heading>
      <Card.Description>Environment variables on your dashboard.</Card.Description>
      <Card.Figure>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://volkovlabs.io/plugins/volkovlabs-env-datasource/"
          title="Environment Data Source"
        >
          <svg id="Environment" width={40} height={40} viewBox="0 0 83 111">
            <rect
              x="64.8086"
              y="79.5276"
              width="16.3737"
              height="60.6744"
              transform="rotate(150 64.8086 79.5276)"
              fill="#111111"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.5585 98.1499C78.4975 93.1544 78.7372 86.7635 75.6324 81.3857C71.0396 73.4308 60.8678 70.7053 52.9129 75.298C44.958 79.8908 42.2325 90.0627 46.8252 98.0175C49.9296 103.395 55.5831 106.382 61.3779 106.336L53.667 92.98L58.3937 84.7932L67.847 84.7932L75.5585 98.1499Z"
              fill="#9D70F9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.6061 4.71409C27.4009 4.66753 33.0543 7.65529 36.1587 13.0322C40.7514 20.9871 38.0259 31.159 30.071 35.7518C22.1161 40.3445 11.9442 37.619 7.35147 29.6641C4.2466 24.2863 4.48638 17.8953 7.4254 12.8998L15.137 26.2567L24.5904 26.2567L29.3171 18.0699L21.6061 4.71409Z"
              fill="#FF5656"
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
          href="https://volkovlabs.io/plugins/volkovlabs-env-datasource/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/volkovlabs-env-datasource"
        >
          GitHub
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
