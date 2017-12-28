import toggleSwitchDriverFactory from './ToggleSwitch.driver';
import {createDriverFactory} from 'wix-ui-test-utils';
import React from 'react';
import ToggleSwitch from './';

describe('ToggleSwitchDriver', () => {
  const noop = () => null;
  const createDriver = createDriverFactory(toggleSwitchDriverFactory);
  const render = props => <ToggleSwitch {...props} onChange={noop}/>;

  // describe('Composing Factories', () => {
  //   it('should have the function : isSmall ', () => {
  //     expect(createDriver(render()).isSmall).not.toBe(undefined);
  //   });

  //   it('should have the function: exists', () => {
  //     expect(createDriver(render()).exists).not.toBe(undefined);
  //   });
  // });

  describe('styles', () => {

    it('should have border-radius 50px', () => {
      const driver = createDriver(render());
      expect(driver.getBorderRadius()).toBe('50px');
    });

    it('should default to large', () => {
      const driver = createDriver(render());
      expect(driver.isLarge()).toBe(true);
    });

    it('should render small', () => {
      const driver = createDriver(render({size: 'small'}));
      expect(driver.isSmall()).toBe(true);
    });

    it('should render medium', () => {
      const driver = createDriver(render({size: 'medium'}));
      expect(driver.isMedium()).toBe(true);
    });

    it('should render large', () => {
      const driver = createDriver(render({size: 'large'}));
      expect(driver.isLarge()).toBe(true);
    });
  });
});
