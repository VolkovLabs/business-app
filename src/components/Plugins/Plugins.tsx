import React, { PureComponent } from 'react';
import { FieldSet } from '@grafana/ui';
import { ApacheECharts } from './ApacheECharts';
import { Balena } from './Balena';
import { Base64Image } from './Base64Image';
import { Calendar } from './Calendar';
import { DataManipulation } from './DataManipulation';
import { Environment } from './Environment';
import { RSSAtom } from './RSSAtom';

/**
 * Plugins
 */
export class Plugins extends PureComponent {
  render() {
    return (
      <div>
        <FieldSet label="Grafana Catalog">
          <ApacheECharts />
          <Base64Image />
          <Calendar />
          <DataManipulation />
          <RSSAtom />
        </FieldSet>

        <FieldSet label="Private Repository">
          <Balena />
          <Environment />
        </FieldSet>
      </div>
    );
  }
}
