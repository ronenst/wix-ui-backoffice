import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import {isClassExists} from '../../test/utils';

const toggleSwitchDriverFactory =
  ({element, wrapper, component}) => {

    return {
      // isXSmall: () => isClassExists(element, 'toggleSwitchXSmall'),
      // isSmall: () => isClassExists(element, 'toggleSwitchSmall'),
      // isLarge: () => !isClassExists(element, 'toggleSwitchXSmall') && !isClassExists(element, 'toggleSwitchSmall'),
      fillColor: () => $(element).find('path').css('fill'),
      setProps: props => {
        const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
        ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
      }
    };
  };

export default toggleSwitchDriverFactory;
