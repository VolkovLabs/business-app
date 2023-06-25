import React from 'react';
import { Card, LinkButton, TagList } from '@grafana/ui';

/**
 * Balena App
 */
export const Balena: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Balena App</Card.Heading>
      <Card.Description>Display device information and manage services using Balena Supervisor API.</Card.Description>
      <Card.Figure>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://volkovlabs.io/plugins/volkovlabs-balena-app"
          title="Balena App"
        >
          <svg id="Balena" width={40} height={40} viewBox="0 0 201 169">
            <path
              d="M106.284 0.471436L39.043 37.1486V113.123L104.538 148.927L172.653 112.249L168.286 39.7684L106.284 0.471436Z"
              fill="white"
            />
            <path d="M167.028 112.441L100.33 148.253L102.2 73.8446L167.028 38.3132L167.028 112.441Z" fill="#111111" />
            <path d="M34.1724 112.631L98.3787 148.479L99.615 74.2379L34.4215 38.3896L34.1724 112.631Z" fill="#FF5656" />
            <path
              d="M100.915 0.471436L166.158 36.2304L100.915 71.9894L35.6729 36.2304L100.915 0.471436Z"
              fill="#9D70F9"
            />
          </svg>
        </a>
      </Card.Figure>
      <Card.Tags>
        <TagList tags={['App']} />
      </Card.Tags>
      <Card.Actions>
        <LinkButton
          variant="primary"
          icon="book-open"
          target="_blank"
          href="https://volkovlabs.io/plugins/volkovlabs-balena-app"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/volkovlabs-balena-app"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="compass"
          target="_blank"
          href="https://hub.balena.io/apps/1946473/balena-app"
        >
          balenaHub
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
