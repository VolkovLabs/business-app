import { shallow } from 'enzyme';
import React from 'react';
import { Config } from './Config';

/*
 Plugin
 */
const getPlugin = (overridePlugin: any = { meta: {} }) => ({
  ...overridePlugin,
  meta: {
    enabled: true,
    ...overridePlugin.meta,
  },
});

/*
 Config
 */
describe('Config', () => {
  /*
   Methods
   */
  describe('Methods', () => {
    it('updatePluginSettings should make post request', () => {
      const plugin = getPlugin({ meta: { enabled: true, id: 'app' } });
      const wrapper = shallow<Config>(<Config plugin={plugin} query={null as any} />);
      const postRequestMock = jest.fn();
      wrapper.instance()['backendSrv'] = {
        post: postRequestMock,
      } as any;

      const settings = { enabled: true, jsonData: {}, pinned: true };
      wrapper.instance().updatePluginSettings(settings);
      expect(postRequestMock).toHaveBeenCalledWith(`api/plugins/${plugin.meta.id}/settings`, settings);
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});
