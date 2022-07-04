import React, { PureComponent } from 'react';
import { Card, FieldSet, LinkButton, TagList } from '@grafana/ui';
import { Balena, Base64Image, DataManipulation, ECharts, Environment, RSSAtom } from '../../icons';

/**
 * Plugins
 */
export class Plugins extends PureComponent {
  /**
   * Render
   */
  render() {
    return (
      <div>
        <FieldSet label="Public Community plugins">
          <Card>
            <Card.Heading>Base64 Image/Video/Audio/PDF</Card.Heading>
            <Card.Description>
              The Base64 Image/Video/Audio/PDF Panel is a plugin for Grafana that displays raw and Base64 encoded files
              in PNG, JPG, GIF, MP4, WEBM, MP3, OGG, PDF formats.
            </Card.Description>
            <Card.Figure>
              <Base64Image size={40} />
            </Card.Figure>
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
                href="https://www.youtube.com/watch?v=1_bgLSehjhg"
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
            </Card.Actions>
          </Card>

          <Card>
            <Card.Heading>RSS/Atom Data Source</Card.Heading>
            <Card.Description>
              The RSS/Atom data source is a plugin for Grafana that retrieves RSS/Atom feeds and allows to visualize
              them using Dynamic Text and other panels.
            </Card.Description>
            <Card.Figure>
              <RSSAtom size={40} />
            </Card.Figure>
            <Card.Tags>
              <TagList tags={['Data Source']} />
            </Card.Tags>
            <Card.Actions>
              <LinkButton
                variant="secondary"
                icon="cloud-download"
                target="_blank"
                href="https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/"
              >
                Grafana Marketplace
              </LinkButton>
              <LinkButton
                variant="secondary"
                icon="star"
                target="_blank"
                href="https://github.com/volkovlabs/volkovlabs-rss-datasource"
              >
                GitHub
              </LinkButton>
              <LinkButton
                variant="secondary"
                icon="play"
                target="_blank"
                href="https://www.youtube.com/watch?v=RAxqS2hpWkg"
              >
                YouTube
              </LinkButton>
              <LinkButton
                variant="secondary"
                icon="file-alt"
                target="_blank"
                href="https://volkovlabs.com/do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449"
              >
                Medium
              </LinkButton>
              <LinkButton
                variant="secondary"
                icon="monitor"
                target="_blank"
                href="https://demo.volkovlabs.io/d/O4tc_E6Gz/rss-atom-feeds?orgId=1"
              >
                Demo
              </LinkButton>
            </Card.Actions>
          </Card>
        </FieldSet>

        <FieldSet label="Private Community plugins">
          <Card>
            <Card.Heading>Apache ECharts Panel</Card.Heading>
            <Card.Description>
              The ECharts Panel is a plugin for Grafana that allows to visualize Apache ECharts on your Grafana
              dashboard.
            </Card.Description>
            <Card.Figure>
              <ECharts size={40} />
            </Card.Figure>
            <Card.Meta>
              grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-echarts-panel
            </Card.Meta>
            <Card.Tags>
              <TagList tags={['Panel']} />
            </Card.Tags>
            <Card.Actions>
              <LinkButton
                variant="secondary"
                icon="star"
                target="_blank"
                href="https://github.com/volkovlabs/volkovlabs-echarts-panel"
              >
                GitHub
              </LinkButton>
              <LinkButton
                variant="secondary"
                icon="play"
                target="_blank"
                href="https://www.youtube.com/watch?v=DxqCrBEmrQw"
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
                href="https://demo.volkovlabs.io/d/O4tc_E6G5/apache-echarts?orgId=1"
              >
                Demo
              </LinkButton>
            </Card.Actions>
          </Card>

          <Card>
            <Card.Heading>Balena Application</Card.Heading>
            <Card.Description>
              The Balena Application plugin for Grafana allows to display device information and manage services using
              Balena Supervisor API.
            </Card.Description>
            <Card.Figure>
              <Balena size={40} />
            </Card.Figure>
            <Card.Meta>
              grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-balena-app
            </Card.Meta>
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
              <LinkButton variant="secondary" icon="play" target="_blank" disabled>
                YouTube
              </LinkButton>
              <LinkButton variant="secondary" icon="file-alt" target="_blank" disabled>
                Medium
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
          <Card>
            <Card.Heading>Data Manipulation Panel</Card.Heading>
            <Card.Description>
              The Data Manipulation Form Panel is a plugin for Grafana that can be used to insert, update application
              data, and modify configuration directly from your Grafana dashboard.
            </Card.Description>
            <Card.Figure>
              <DataManipulation size={40} />
            </Card.Figure>
            <Card.Meta>
              grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-form-panel
            </Card.Meta>
            <Card.Tags>
              <TagList tags={['Panel']} />
            </Card.Tags>
            <Card.Actions>
              <LinkButton
                variant="secondary"
                icon="star"
                target="_blank"
                href="https://github.com/volkovlabs/volkovlabs-form-panel"
              >
                GitHub
              </LinkButton>
              <LinkButton
                variant="secondary"
                icon="play"
                target="_blank"
                href="https://www.youtube.com/watch?v=DXALVG8GijM"
              >
                YouTube
              </LinkButton>
              <LinkButton
                variant="secondary"
                icon="file-alt"
                target="_blank"
                href="https://volkovlabs.com/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0"
              >
                Medium
              </LinkButton>
            </Card.Actions>
          </Card>

          <Card>
            <Card.Heading>Environment Data Source</Card.Heading>
            <Card.Description>
              The Environment data source is a plugin for Grafana that returns environment variables to display on your
              dashboard or use as Variables to retrieve data.
            </Card.Description>
            <Card.Figure>
              <Environment size={40} />
            </Card.Figure>
            <Card.Meta>
              grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource
            </Card.Meta>
            <Card.Tags>
              <TagList tags={['Data Source']} />
            </Card.Tags>
            <Card.Actions>
              <LinkButton
                variant="secondary"
                icon="star"
                target="_blank"
                href="https://github.com/volkovlabs/volkovlabs-env-datasource"
              >
                GitHub
              </LinkButton>
              <LinkButton
                variant="secondary"
                icon="play"
                target="_blank"
                href="https://www.youtube.com/watch?v=GPzsciOxKdk"
              >
                YouTube
              </LinkButton>
              <LinkButton
                variant="secondary"
                icon="file-alt"
                target="_blank"
                href="https://volkovlabs.com/using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416"
              >
                Medium
              </LinkButton>
            </Card.Actions>
          </Card>
        </FieldSet>
      </div>
    );
  }
}
