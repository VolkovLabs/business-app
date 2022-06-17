import React, { PureComponent } from 'react';
import { AppPluginMeta, PluginConfigPageProps } from '@grafana/data';
import { BackendSrv, getBackendSrv } from '@grafana/runtime';
import { FieldSet } from '@grafana/ui';
import { Application } from '../../constants';
import { GlobalSettings } from '../../types';

/**
 * Page Properties
 */
interface Props extends PluginConfigPageProps<AppPluginMeta<GlobalSettings>> {}

/**
 * State
 */
interface State {}

/**
 * Config component
 */
export class Config extends PureComponent<Props, State> {
  /**
   * Service to communicate via http(s) to a remote backend such as the Grafana backend, a datasource etc.
   */
  private backendSrv: BackendSrv = getBackendSrv();

  /**
   * Plugin Settings
   *
   * @param settings Plugin Settings
   */
  updatePluginSettings = (settings: { enabled: boolean; jsonData: unknown; pinned: boolean }): Promise<undefined> => {
    return this.backendSrv.post(`api/plugins/${this.props.plugin.meta.id}/settings`, settings);
  };

  /**
   * Page Render
   */
  render() {
    return (
      <FieldSet>
        <h2>{Application.name}</h2>
        <p>The Abc Application, is a plugin for Grafana that...</p>
      </FieldSet>
    );
  }
}
