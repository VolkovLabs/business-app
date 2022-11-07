import React, { PureComponent } from 'react';
import { Card, LinkButton, TagList } from '@grafana/ui';

/**
 * Calendar
 */
export class Calendar extends PureComponent {
  render() {
    return (
      <Card>
        <Card.Heading>Calendar Panel</Card.Heading>
        <Card.Description>Display calendar events and change time range.</Card.Description>
        <Card.Figure>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://volkovlabs.io/plugins/volkovlabs-calendar-panel/"
            title="Calendar"
          >
            <svg id="Calendar" width="40" height="40" viewBox="0 0 310 322" fill="none">
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
            variant="secondary"
            icon="star"
            target="_blank"
            href="https://github.com/volkovlabs/volkovlabs-calendar-panel"
          >
            GitHub
          </LinkButton>
          <LinkButton
            variant="destructive"
            icon="play"
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLPow72ygztmSBVo4p4V5RsCb0z_Rjqisp"
          >
            YouTube Playlist
          </LinkButton>
          <LinkButton
            variant="success"
            icon="monitor"
            target="_blank"
            href="https://live.volkovlabs.io/d/0fgJcb4Vz/calendar-panel?orgId=1"
          >
            Live
          </LinkButton>
          <LinkButton
            variant="primary"
            icon="cloud-download"
            target="_blank"
            href="https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/"
          >
            Grafana Catalog
          </LinkButton>
        </Card.Actions>
      </Card>
    );
  }
}
