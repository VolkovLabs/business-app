import { PluginPage, PluginPageProps } from '@grafana/runtime';
import React from 'react';

import { TEST_IDS } from '../../constants';
import {
  ApacheEcharts,
  Base64Image,
  Calendar,
  DataManipulation,
  DynamicText,
  Environment,
  GrafanaApi,
  RssAtom,
  Static,
  Variable,
} from '../Plugins';

/**
 * Properties
 */
interface Props extends PluginPageProps {}

/**
 * Community
 */
export const Community: React.FC<Props> = () => {
  return (
    <PluginPage>
      <div data-testid={TEST_IDS.community.root}>
        <ApacheEcharts />
        <Base64Image />
        <Calendar />
        <DataManipulation />
        <DynamicText />
        <Environment />
        <GrafanaApi />
        <RssAtom />
        <Static />
        <Variable />
      </div>
    </PluginPage>
  );
};
