import { AppRootProps } from '@grafana/data';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
  return (
    <Switch>
      <Route component={PluginsPage} />
    </Switch>
  );
};
