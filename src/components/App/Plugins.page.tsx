import { PluginPage } from '@grafana/runtime';
import React from 'react';

import { TEST_IDS } from '../../constants';
import {
  BusinessCalendar,
  BusinessCharts,
  BusinessForms,
  BusinessInput,
  BusinessMedia,
  BusinessNews,
  BusinessSatellite,
  BusinessTable,
  BusinessText,
  BusinessVariable,
} from '../Plugins';

/**
 * Plugins
 */
export const PluginsPage: React.FC = () => {
  return (
    <PluginPage>
      <div data-testid={TEST_IDS.plugins.root}>
        <BusinessCalendar />
        <BusinessCharts />
        <BusinessForms />
        <BusinessInput />
        <BusinessMedia />
        <BusinessNews />
        <BusinessSatellite />
        <BusinessTable />
        <BusinessText />
        <BusinessVariable />
      </div>
    </PluginPage>
  );
};
