import React, { PureComponent } from 'react';
import { Card, LinkButton, TagList } from '@grafana/ui';

/**
 * Static
 */
export class Static extends PureComponent {
  render() {
    return (
      <Card>
        <Card.Heading>Static Data Source</Card.Heading>
        <Card.Description>Emulate your data to test and develop panels.</Card.Description>
        <Card.Figure>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://volkovlabs.io/plugins/volkovlabs-static-datasource/"
            title="Static Data Source"
          >
            <svg width={40} height={40} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25.0359" cy="24.5389" r="24.5389" fill="#9D70F9" />
              <path
                d="M31.3142 4.57031L14.208 26.632H22.0988L19.0407 43.8774L36.1468 21.8157H28.2561L31.3142 4.57031Z"
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
            variant="secondary"
            icon="star"
            target="_blank"
            href="https://github.com/volkovlabs/volkovlabs-static-datasource"
          >
            GitHub
          </LinkButton>
          <LinkButton
            variant="destructive"
            icon="play"
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLPow72ygztmSOuCRtS85zolztwDMpCsIV"
          >
            YouTube
          </LinkButton>
          <LinkButton
            variant="success"
            icon="monitor"
            target="_blank"
            href="https://live.volkovlabs.io/d/heM1lTN4z/static-data-source?orgId=1"
          >
            Live
          </LinkButton>
          <LinkButton
            variant="primary"
            icon="cloud-download"
            target="_blank"
            href="https://grafana.com/grafana/plugins/marcusolsson-static-datasource/"
          >
            Grafana
          </LinkButton>
        </Card.Actions>
      </Card>
    );
  }
}
