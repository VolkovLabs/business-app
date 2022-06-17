import React, { PureComponent } from 'react';
import { AppRootProps, NavModelItem } from '@grafana/data';
import { Alert } from '@grafana/ui';
import { Application } from '../../constants';
import { GlobalSettings } from '../../types';

/**
 * Properties
 */
interface Props extends AppRootProps<GlobalSettings> {}

/**
 * State
 */
interface State {
  /**
   * Loading
   *
   * @type {boolean}
   */
  loading: boolean;
}

/**
 * Root Page
 */
export class RootPage extends PureComponent<Props, State> {
  /**
   * Constructor
   *
   * @param props {Props} Properties
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  /**
   * Mount
   */
  async componentDidMount() {
    this.updateNav();

    /**
     * Set state
     */
    this.setState({
      loading: false,
    });
  }

  /**
   * Navigation
   */
  updateNav() {
    const { path, onNavChanged, meta } = this.props;
    const tabs: NavModelItem[] = [];

    /**
     * Home
     */
    tabs.push({
      text: 'Home',
      url: path,
      id: 'home',
      icon: 'fa fa-fw fa-home',
      active: true,
    });

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
  }

  /**
   * Render
   */
  render() {
    const { loading } = this.state;

    /**
     * Loading
     */
    if (loading) {
      return (
        <Alert title="Loading..." severity="info">
          <p>Loading...</p>
        </Alert>
      );
    }

    return <div>Loaded and ready to go!</div>;
  }
}
