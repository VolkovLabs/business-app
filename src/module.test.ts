import { AppPlugin } from '@grafana/data';
import { plugin } from './module';

/*
 Plugin
 */
describe('plugin', () => {
  it('Should be instance of AppPlugin', () => {
    expect(plugin).toBeInstanceOf(AppPlugin);
  });
});
