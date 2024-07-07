import { AppPluginMeta, PluginConfigPageProps } from '@grafana/data';
import { FieldSet } from '@grafana/ui';
import React from 'react';

import { APP_INFO, TEST_IDS } from '../../constants';
import { AppSettings } from '../../types';

/**
 * Page Properties
 */
interface Props extends PluginConfigPageProps<AppPluginMeta<AppSettings>> {}

/**
 * Config component
 */
export const Config: React.FC<Props> = () => {
  return (
    <FieldSet data-testid={TEST_IDS.config.root}>
      <h2>{APP_INFO.name}</h2>
      <p>The Business Suite App includes Docker image and an application plugin.</p>
    </FieldSet>
  );
};
