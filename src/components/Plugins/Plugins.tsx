import React, { PureComponent } from 'react';
import { ApacheECharts } from './ApacheECharts';
import { Balena } from './Balena';
import { Base64Image } from './Base64Image';
import { Calendar } from './Calendar';
import { DataManipulation } from './DataManipulation';
import { DynamicText } from './DynamicText';
import { Environment } from './Environment';
import { RSSAtom } from './RSSAtom';
import { Static } from './Static';

/**
 * Plugins
 */
export class Plugins extends PureComponent {
  render() {
    return (
      <>
        <ApacheECharts />
        <Balena />
        <Base64Image />
        <Calendar />
        <DataManipulation />
        <DynamicText />
        <Environment />
        <RSSAtom />
        <Static />
      </>
    );
  }
}
