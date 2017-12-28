// import {toggleSwitchDriverFactory as coreFactory}
  // from 'wix-ui-core/dist/src/components/ToggleSwitch/ToggleSwitch.driver';

const toggleSwitchDriverFactory =
  component => {

    const {calculatedTheme} = component.componentInstance;

    return {
      // ...coreFactory(core),
      isSmall: () => calculatedTheme.outerLabelWidth === '28px',
      isMedium: () => calculatedTheme.outerLabelWidth === '36px',
      isLarge: () => calculatedTheme.outerLabelWidth === '45px',
      getBorderRadius: () => calculatedTheme.borderRadius
    };
  };

export default toggleSwitchDriverFactory;
