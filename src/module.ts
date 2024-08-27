import { AppPlugin } from '@grafana/data';

import { App } from './components';
import { AppSettings } from './types';

/**
 * App Plugin
 */
export const plugin = new AppPlugin<AppSettings>().setRootPage(App);
