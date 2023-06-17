import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppPluginMeta, PluginType } from '@grafana/data';
import { render, screen } from '@testing-library/react';
import { Application, TestIds } from '../../constants';
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
 * Application
 */
describe('Application', () => {
  const meta = getMeta();

  /**
   * Rendering
   */
  describe('rendering', () => {
    it('Should render community page', async () => {
      render(
        <BrowserRouter>
          <App
            basename={Application.root}
            meta={meta}
            path={null as any}
            query={null as any}
            onNavChanged={jest.fn()}
          />
        </BrowserRouter>
      );

      expect(screen.queryByTestId(TestIds.development.root)).not.toBeInTheDocument();
      expect(screen.getByTestId(TestIds.community.root)).toBeInTheDocument();
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});
