import React from 'react';
import { PluginPage, PluginPageProps } from '@grafana/runtime';
import { TestIds } from '../../constants';
import {
  ApacheECharts,
  Base64Image,
  Calendar,
  DataManipulation,
  DynamicText,
  GrafanaAPI,
  RSSAtom,
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
      <div data-testid={TestIds.community.root}>
        <ApacheECharts />
        <Base64Image />
        <Calendar />
        <DataManipulation />
        <DynamicText />
        <GrafanaAPI />
        <RSSAtom />
        <Static />
        <Variable />
      </div>
    </PluginPage>
  );
};
