import { AppRootProps } from '@grafana/data';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { APP_ROUTES } from '../../constants';
import { AppSettings } from '../../types';
import { Community } from '../Community';
import { Development } from '../Development';

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
      <Route exact path={APP_ROUTES.development} component={Development} />
      <Route component={Community} />
    </Switch>
  );
};
