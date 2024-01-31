import { render, screen } from '@testing-library/react';
import React from 'react';

import { TEST_IDS } from '../../constants';
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
  it('Should find component', () => {
    const plugin = getPlugin({ meta: { enabled: true, id: 'app' } });

    render(<Config plugin={plugin} query={null as any} />);

    expect(screen.getByTestId(TEST_IDS.config.root)).toBeInTheDocument();
  });
});
