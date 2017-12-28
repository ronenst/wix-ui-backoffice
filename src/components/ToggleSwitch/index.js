import React from 'react';
import {oneOf} from 'prop-types';
import CoreToggleSwitch from 'wix-ui-core/ToggleSwitch';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';

// const ToggleSwitch = ({size, skin, ...coreProps}) => (
//   <ThemedComponent theme={theme} size={size} skin={skin}>
//     <CoreToggleSwitch {...coreProps}/>
//   </ThemedComponent>
// );

class ToggleSwitch extends React.Component {

  render() {
    const {size, skin, ...coreProps} = this.props;

    return (
      <ThemedComponent theme={theme} size={size} skin={skin}>
        <CoreToggleSwitch
          ref={core => this.calculatedTheme = core.props.theme}
          {...coreProps}
          />
      </ThemedComponent>);
  }
}

ToggleSwitch.propTypes = {
  ...CoreToggleSwitch.propTypes,

  /** size of the toggle switch */
  size: oneOf(['small', 'medium', 'large']),

  /** Color for disabled toggle switch */
  skin: oneOf(['standard', 'error', 'success'])
};

ToggleSwitch.defaultProps = {
  size: 'large',
  skin: 'standard'
};

export default ToggleSwitch;
