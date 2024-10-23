import { AppPluginMeta, PluginType } from '@grafana/data';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { APP_INFO, TEST_IDS } from '../../constants';
import { App } from './App';

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
 * App
 */
describe('App', () => {
  const meta = getMeta();

  /**
   * Rendering
   */
  describe('rendering', () => {
    it('Should render plugins page', async () => {
      render(
        <App basename={APP_INFO.root} meta={meta} path={null as any} query={null as any} onNavChanged={jest.fn()} />
      );

      expect(screen.getByTestId(TEST_IDS.plugins.root)).toBeInTheDocument();
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});
