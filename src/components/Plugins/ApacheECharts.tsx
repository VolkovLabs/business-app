import React from 'react';
import { Card, LinkButton, TagList } from '@grafana/ui';

/**
 * Apache ECharts
 */
export const ApacheECharts: React.FC = () => {
  return (
    <Card>
      <Card.Heading>Apache ECharts Panel</Card.Heading>
      <Card.Description>Powerful charting and visualization library Apache ECharts.</Card.Description>
      <Card.Figure>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://volkovlabs.io/plugins/volkovlabs-echarts-panel/"
          title="Apache ECharts Panel"
        >
          <svg id="ECharts" width={40} height={40} viewBox="0 0 92 92">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.865 91.728C71.1949 91.728 91.729 71.194 91.729 45.864C91.729 20.534 71.1949 0 45.865 0C20.535 0 0.000976562 20.534 0.000976562 45.864C0.000976562 71.194 20.535 91.728 45.865 91.728ZM45.8657 74.6621C61.7706 74.6621 74.664 61.7686 74.664 45.8637C74.664 29.9589 61.7706 17.0654 45.8657 17.0654C29.9608 17.0654 17.0674 29.9589 17.0674 45.8637C17.0674 61.7686 29.9608 74.6621 45.8657 74.6621Z"
              fill="#9D70F9"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M91.7251 45.864C91.7251 20.5344 71.1917 0.000672074 45.8623 0V17.0654C61.7669 17.0657 74.6601 29.959 74.6601 45.8637C74.6601 45.8638 74.6601 45.8639 74.6601 45.864L91.7251 45.864Z"
              fill="#FF5656"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-0.000442505 45.8645C-0.000442505 45.8645 -0.000442505 45.8645 -0.000442505 45.8645C-0.000442505 71.1941 20.5329 91.7278 45.8623 91.7285V74.6631C29.9577 74.6628 17.0645 61.7695 17.0645 45.8648C17.0645 45.8647 17.0645 45.8646 17.0645 45.8645H-0.000442505Z"
              fill="#111111"
            />
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
          href="https://volkovlabs.io/plugins/volkovlabs-echarts-panel/"
        >
          Documentation
        </LinkButton>
        <LinkButton
          variant="secondary"
          icon="github"
          target="_blank"
          href="https://github.com/volkovlabs/volkovlabs-echarts-panel"
        >
          GitHub
        </LinkButton>
        <LinkButton
          variant="destructive"
          icon="play"
          target="_blank"
          href="https://www.youtube.com/playlist?list=PLPow72ygztmQHGWFqksEf3LebUfhqBfFu"
        >
          YouTube
        </LinkButton>
        <LinkButton
          variant="success"
          icon="cloud-download"
          target="_blank"
          href="https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/"
        >
          Grafana
        </LinkButton>
        <LinkButton variant="secondary" icon="building" target="_blank" href="https://echarts.volkovlabs.io">
          Examples
        </LinkButton>
      </Card.Actions>
    </Card>
  );
};
