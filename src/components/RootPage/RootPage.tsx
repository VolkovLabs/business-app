import React, { useState, useCallback, useEffect } from 'react';
import { AppRootProps, NavModelItem } from '@grafana/data';
import { Alert } from '@grafana/ui';
import { Application, TestIds } from '../../constants';
import { GlobalSettings } from '../../types';
import { Community, Development } from '../Plugins';

/**
 * Properties
 */
interface Props extends AppRootProps<GlobalSettings> {}

/**
 * Root Page
 */
export const RootPage: React.FC<Props> = ({ path, onNavChanged, basename, meta }) => {
  /**
   * State
   */
  const [loading, setLoading] = useState(true);

  /**
   * Update Navigation
   */
  const updateNav = useCallback(() => {
    const tabs: NavModelItem[] = [];

    /**
     * Home
     */
    tabs.push(
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
      }
    );

    /**
     * Header
     */
    const node = {
      text: Application.name,
      img: meta.info.logos.large,
      subTitle: Application.subTitle,
      url: path,
      children: tabs,
    };

    /**
     * Update the page header
     */
    onNavChanged({
      node: node,
      main: node,
    });
  }, [basename, meta.info.logos.large, onNavChanged, path]);

  /**
   * Update nav
   */
  useEffect(() => {
    updateNav();

    /**
     * Set loading
     */
    setLoading(false);
  }, [updateNav]);

  /**
   * Loading
   */
  if (loading) {
    return (
      <Alert title="Loading..." severity="info" data-testid={TestIds.rootPage.loadingIndicator}>
        <p>Loading...</p>
      </Alert>
    );
  }

  /**
   * Development
   */
  if (path.includes('development')) {
    return <Development />;
  }

  return <Community />;
};
