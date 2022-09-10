import React, { PureComponent } from 'react';
import { Card, LinkButton, TagList } from '@grafana/ui';

/**
 * Balena Application
 */
export class Balena extends PureComponent {
  render() {
    return (
      <Card>
        <Card.Heading>Balena Application</Card.Heading>
        <Card.Description>
          The Balena Application plugin for Grafana allows to display device information and manage services using
          Balena Supervisor API.
        </Card.Description>
        <Card.Figure>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/volkovlabs/volkovlabs-balena-app"
            title="Balena Application"
          >
            <svg id="Balena" width={40} height={40} viewBox="0 0 201 169">
              <path
                d="M106.284 0.471436L39.043 37.1486V113.123L104.538 148.927L172.653 112.249L168.286 39.7684L106.284 0.471436Z"
                fill="white"
              />
              <path d="M167.028 112.441L100.33 148.253L102.2 73.8446L167.028 38.3132L167.028 112.441Z" fill="#111111" />
              <path
                d="M34.1724 112.631L98.3787 148.479L99.615 74.2379L34.4215 38.3896L34.1724 112.631Z"
                fill="#FF5656"
              />
              <path
                d="M100.915 0.471436L166.158 36.2304L100.915 71.9894L35.6729 36.2304L100.915 0.471436Z"
                fill="#9D70F9"
              />
            </svg>
          </a>
        </Card.Figure>
        <Card.Meta>grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-balena-app</Card.Meta>
        <Card.Tags>
          <TagList tags={['Application']} />
        </Card.Tags>
        <Card.Actions>
          <LinkButton
            variant="secondary"
            icon="star"
            target="_blank"
            href="https://github.com/volkovlabs/volkovlabs-balena-app"
          >
            GitHub
          </LinkButton>
          <LinkButton
            variant="secondary"
            icon="play"
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLPow72ygztmRdzBPeQ16cwM7ZvPbXfyHv"
          >
            YouTube
          </LinkButton>
          <LinkButton variant="secondary" icon="file-alt" target="_blank" disabled>
            Medium
          </LinkButton>
          <LinkButton
            variant="secondary"
            icon="monitor"
            target="_blank"
            href="https://live.volkovlabs.io/d/8DuPr3e7z/balena-application?orgId=1"
          >
            Live
          </LinkButton>
          <LinkButton
            variant="secondary"
            icon="compass"
            target="_blank"
            href="https://hub.balena.io/organizations/volkovlabs/projects/balena-app"
          >
            balenaHub
          </LinkButton>
        </Card.Actions>
      </Card>
    );
  }
}
