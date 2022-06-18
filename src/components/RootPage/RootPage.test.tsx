import { shallow } from 'enzyme';
import React from 'react';
import { setImmediate } from 'timers';
import { AppPluginMeta, PluginType } from '@grafana/data';
import { Alert } from '@grafana/ui';
import { Application } from '../../constants';
import { RootPage } from './RootPage';

/**
 * Meta
 */
const getMeta = (): AppPluginMeta => ({
  id: '',
  name: '',
  type: PluginType.app,
  module: '',
  baseUrl: '',
  info: {
    author: {} as any,
    description: '',
    logos: {
      large: '',
      small: '',
    },
    links: [],
    screenshots: [],
    updated: '',
    version: '',
  },
});

/**
 * RootPage
 */
describe('RootPage', () => {
  const meta = getMeta();
  const path = '/app';
  const onNavChangedMock = jest.fn();

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
    });
  });

  beforeEach(() => {
    onNavChangedMock.mockClear();
  });

  /**
   * Mounting
   */
  describe('Mounting', () => {
    it('Should update navigation', () => {
      const wrapper = shallow<RootPage>(
        <RootPage basename="" meta={meta} path={path} query={null as any} onNavChanged={onNavChangedMock} />
      );
      const testedMethod = jest.spyOn(wrapper.instance(), 'updateNav');
      wrapper.instance().componentDidMount();
      expect(testedMethod).toHaveBeenCalledTimes(1);
    });
  });

  /**
   * updateNav
   */
  describe('updateNav', () => {
    it('Should call onNavChanged prop', () => {
      const wrapper = shallow<RootPage>(
        <RootPage basename="" meta={meta} path={path} query={null as any} onNavChanged={onNavChangedMock} />
      );
      wrapper.instance().updateNav();
      const node = {
        text: Application.name,
        img: meta.info.logos.large,
        subTitle: Application.subTitle,
        url: path,
        children: [
          {
            text: 'Plugins',
            url: path,
            id: 'home',
            icon: 'apps',
            active: true,
          },
        ],
      };
      expect(onNavChangedMock).toHaveBeenCalledWith({
        node: node,
        main: node,
      });
    });
  });

  /**
   * Rendering
   */
  describe('rendering', () => {
    it('Should show message if loading=true', (done) => {
      const wrapper = shallow<RootPage>(
        <RootPage basename="" meta={meta} path={path} query={null as any} onNavChanged={onNavChangedMock} />
      );
      wrapper.instance().componentDidMount();

      setImmediate(() => {
        const loadingMessageComponent = wrapper.findWhere(
          (node) => node.is(Alert) && node.prop('title') === 'Loading...'
        );
        expect(loadingMessageComponent.exists()).not.toBeTruthy();
        done();
      });
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});
