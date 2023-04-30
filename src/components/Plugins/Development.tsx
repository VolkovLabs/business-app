import React, { PureComponent } from 'react';
import { Balena } from './Balena';
import { Environment } from './Environment';

/**
 * Development
 */
export class Development extends PureComponent {
  render() {
    return (
      <>
        <Balena />
        <Environment />
      </>
    );
  }
}
