import { AppRootProps } from '@grafana/data';
import React from 'react';

import { AppSettings } from '../../types';
import { PluginsPage } from './Plugins.page';

/**
 * Properties
 */
interface Props extends AppRootProps<AppSettings> {}

/**
 * App
 */
export const App: React.FC<Props> = () => {
  return <PluginsPage />;
};
