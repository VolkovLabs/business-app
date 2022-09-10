import React, { PureComponent } from 'react';
import { Card, LinkButton, TagList } from '@grafana/ui';

/**
 * Base64
 */
export class Base64Image extends PureComponent {
  render() {
    return (
      <Card>
        <Card.Heading>Base64 Image/Video/Audio/PDF Panel</Card.Heading>
        <Card.Description>
          The Base64 Image/Video/Audio/PDF Panel is a plugin for Grafana that displays raw and Base64 encoded files in
          PNG, JPG, GIF, MP4, WEBM, MP3, OGG, PDF formats.
        </Card.Description>
        <Card.Figure>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://volkovlabs.io/plugins/volkovlabs-image-panel/"
            title="Base64 Image/Video/Audio/PDF panel"
          >
            <svg id="Base64Image" width={40} height={40} viewBox="0 0 88 62">
              <rect x="0.837646" y="0.64502" width="86.7975" height="61.1037" fill="#FF5656" />
              <circle cx="69.5012" cy="19.302" r="9.13037" fill="#F5F6F9" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.837646 61.7487H24.911L24.9109 61.7488H78.6315L51.7712 32.4673L37.088 48.474L16.9507 26.5216L0.837646 44.0871V61.7487Z"
                fill="#111111"
              />
            </svg>
          </a>
        </Card.Figure>
        <Card.Meta>grafana-cli plugins install volkovlabs-image-panel</Card.Meta>
        <Card.Tags>
          <TagList tags={['Panel']} />
        </Card.Tags>
        <Card.Actions>
          <LinkButton
            variant="secondary"
            icon="cloud-download"
            target="_blank"
            href="https://grafana.com/grafana/plugins/volkovlabs-image-panel/"
          >
            Grafana Marketplace
          </LinkButton>
          <LinkButton
            variant="secondary"
            target="_blank"
            icon="star"
            href="https://github.com/volkovlabs/volkovlabs-image-panel"
          >
            GitHub
          </LinkButton>
          <LinkButton
            variant="secondary"
            icon="play"
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLPow72ygztmQjZ19D7wKHc_6VG3dCjkwo"
          >
            YouTube
          </LinkButton>
          <LinkButton
            variant="secondary"
            icon="file-alt"
            target="_blank"
            href="https://volkovlabs.com/display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e"
          >
            Medium
          </LinkButton>
          <LinkButton
            variant="secondary"
            icon="monitor"
            target="_blank"
            href="https://live.volkovlabs.io/d/bN3aCqe7k/base64-image-pdf?orgId=1"
          >
            Live
          </LinkButton>
        </Card.Actions>
      </Card>
    );
  }
}
