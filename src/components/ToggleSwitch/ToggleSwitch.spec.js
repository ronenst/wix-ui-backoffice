import toggleSwitchDriverFactory from './ToggleSwitch.driver';
import {toggleSwitchDriverFactory as coreToggleSwitchDriverFactory}
  from 'wix-ui-core/dist/src/components/ToggleSwitch/ToggleSwitch.driver';

import {createDriverFactory} from 'wix-ui-test-utils';
import React from 'react';
import ToggleSwitch from './';

describe('ToggleSwitchDriver', () => {

  const composeFactories =

    (...factories) =>
      component =>
        factories.reduce((factories, factory) => ({ ...factories, ...factory(component) })
          , {});

  const driverFactory = composeFactories(coreToggleSwitchDriverFactory, toggleSwitchDriverFactory);

  const createDriver = createDriverFactory(driverFactory);
  const render = props => <ToggleSwitch {...props} onChange={() => { }} />;

  it('should exist', () => {
    expect(createDriver).not.toEqual({});
  });

  it('should have the function : fillColor', () => {
    expect(createDriver(render()).fillColor).not.toBe(undefined);
  });

  it('should have the function: exists', () => {
    expect(createDriver(render()).exists).not.toBe(undefined);
  });
});
