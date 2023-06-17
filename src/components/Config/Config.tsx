import React from 'react';
import { AppPluginMeta, PluginConfigPageProps } from '@grafana/data';
import { FieldSet } from '@grafana/ui';
import { Application, TestIds } from '../../constants';
import { GlobalSettings } from '../../types';

/**
 * Page Properties
 */
interface Props extends PluginConfigPageProps<AppPluginMeta<GlobalSettings>> {}

/**
 * Config component
 */
export const Config: React.FC<Props> = () => {
  return (
    <FieldSet data-testid={TestIds.config.root}>
      <h2>{Application.name}</h2>
      <p>
        The Volkov Labs Application includes Docker image and Application plugin with information about Volkov Labs
        supported Grafana plugins.
      </p>
    </FieldSet>
  );
};
