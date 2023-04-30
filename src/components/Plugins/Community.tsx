import React, { PureComponent } from 'react';
import { ApacheECharts } from './ApacheECharts';
import { Base64Image } from './Base64Image';
import { Calendar } from './Calendar';
import { DataManipulation } from './DataManipulation';
import { DynamicText } from './DynamicText';
import { GrafanaAPI } from './GrafanaAPI';
import { RSSAtom } from './RSSAtom';
import { Static } from './Static';

/**
 * Community
 */
export class Community extends PureComponent {
  render() {
    return (
      <>
        <ApacheECharts />
        <Base64Image />
        <Calendar />
        <DataManipulation />
        <DynamicText />
        <GrafanaAPI />
        <RSSAtom />
        <Static />
      </>
    );
  }
}
