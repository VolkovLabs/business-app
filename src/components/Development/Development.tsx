import { PluginPage, PluginPageProps } from '@grafana/runtime';
import React from 'react';

import { TEST_IDS } from '../../constants';
import { Balena, Environment } from '../Plugins';

/**
 * Properties
 */
interface Props extends PluginPageProps {}

/**
 * Development
 */
export const Development: React.FC<Props> = () => {
  return (
    <PluginPage>
      <div data-testid={TEST_IDS.development.root}>
        <Balena />
        <Environment />
      </div>
    </PluginPage>
  );
};
