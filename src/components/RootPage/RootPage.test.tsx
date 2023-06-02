import React from 'react';
import { AppPluginMeta, PluginType } from '@grafana/data';
import { act, render, screen } from '@testing-library/react';
import { Application, TestIds } from '../../constants';
import { RootPage } from './RootPage';

jest.mock('../Plugins', () => ({
  Development: jest.fn().mockImplementation(() => <div data-testid={TestIds.rootPage.development} />),
  Community: jest.fn().mockImplementation(() => <div data-testid={TestIds.rootPage.community} />),
}));

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

describe('RootPage', () => {
  const meta = getMeta();
  const path = '/app';
  const onNavChangedMock = jest.fn();
  const basename = '/app';

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
    });
  });

  beforeEach(() => {
    onNavChangedMock.mockClear();
  });

  /**
   * Navigation
   */
  describe('Navigation', () => {
    it('Should update navigation on mount', async () => {
      await act(() =>
        render(
          <RootPage basename={basename} meta={meta} path={path} query={null as any} onNavChanged={onNavChangedMock} />
        )
      );

      const node = {
        text: Application.name,
        img: meta.info.logos.large,
        subTitle: Application.subTitle,
        url: path,
        children: [
          {
            text: 'Community',
            url: `${basename}/community`,
            id: 'community',
            icon: 'apps',
            active: !path.includes('development'),
          },
          {
            text: 'Development',
            url: `${basename}/development`,
            id: 'development',
            icon: 'fire',
            active: path.includes('development'),
          },
        ],
      };
      expect(onNavChangedMock).toHaveBeenCalledWith({
        node: node,
        main: node,
      });
    });

    it('Should update navigation if path changed', async () => {
      const onNavChanged = jest.fn();

      const { rerender } = await act(() =>
        render(<RootPage basename={basename} meta={meta} path={path} query={null as any} onNavChanged={onNavChanged} />)
      );

      onNavChanged.mockClear();

      await act(() =>
        rerender(
          <RootPage
            basename={basename}
            meta={meta}
            path={`${path}/development`}
            query={null as any}
            onNavChanged={onNavChanged}
          />
        )
      );

      expect(onNavChanged).toHaveBeenCalledWith(
        expect.objectContaining({
          main: expect.objectContaining({
            children: expect.arrayContaining([
              expect.objectContaining({
                id: 'development',
                active: true,
              }),
            ]),
          }),
        })
      );
    });
  });

  /**
   * Rendering
   */
  describe('rendering', () => {
    it('Should render content only after nav changed', async () => {
      await act(() =>
        render(
          <RootPage
            basename=""
            meta={meta}
            path={`${path}/development`}
            query={null as any}
            onNavChanged={onNavChangedMock}
          />
        )
      );

      expect(screen.queryByTestId(TestIds.rootPage.loadingIndicator)).not.toBeInTheDocument();
      expect(screen.getByTestId(TestIds.rootPage.development)).toBeInTheDocument();
    });

    it('Should render community page', async () => {
      await act(() =>
        render(
          <RootPage
            basename=""
            meta={meta}
            path={`${path}/community`}
            query={null as any}
            onNavChanged={onNavChangedMock}
          />
        )
      );

      expect(screen.queryByTestId(TestIds.rootPage.loadingIndicator)).not.toBeInTheDocument();
      expect(screen.getByTestId(TestIds.rootPage.community)).toBeInTheDocument();
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});
