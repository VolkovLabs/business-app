import { AppPlugin } from '@grafana/data';
import { App, Config } from './components';
import { AppSettings } from './types';

/**
 * App Plugin
 */
export const plugin = new AppPlugin<AppSettings>().setRootPage(App).addConfigPage({
  title: 'Configuration',
  icon: 'cog',
  body: Config,
  id: 'configuration',
});
