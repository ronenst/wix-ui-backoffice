import {palette} from '../../palette';

const sizeToOuterLabelWidth = {
  small: '28px',
  medium: '36px',
  large: '45px'
};

const sizeToOuterLabelHeight = {
  small: '15px',
  medium: '20px',
  large: '24px'
};

const sizeToInnerLabelWidth = {
  small: '13px',
  medium: '18px',
  large: '21px'
};

const sizeToInnerLabelHeight = {
  small: '13px',
  medium: '18px',
  large: '22px'
};

const sizeTolabelMovementRange = {
  small: '14px',
  medium: '17px',
  large: '23px'
};

const sizeTotoggleIconDisplay = {
  small: 'none !important',
  medium: 'block',
  large: 'block'
};

const skinToBackgroundColor = {
  standard: palette.tableSelected,
  success: palette.successNotifications,
  error: palette.dangerNotifications
};

const skinToBackgroundColorChecked = {
  standard: palette.main,
  success: palette.ctaHover,
  error: palette.danger
};

const skinToColor = {
  standard: palette.tableSelected,
  success: palette.successNotifications,
  error: palette.dangerNotifications
};

const skinToColorChecked = {
  standard: palette.main,
  success: palette.ctaHover,
  error: palette.danger
};

const skinToHoverBackgroundColor = {
  standard: palette.mainHover,
  success: palette.successHover,
  error: palette.dangerHover
};

const skinToHoverColor = {
  standard: palette.mainHover,
  success: palette.successHover,
  error: palette.dangerHover
};

export const theme = ({size, skin}) => ({
  outerLabelWidth: sizeToOuterLabelWidth[size],
  outerLabelHeight: sizeToOuterLabelHeight[size],

  innerLabelWidth: sizeToInnerLabelWidth[size],
  innerLabelHeight: sizeToInnerLabelHeight[size],
  innerLabelBackgroundColor: palette.white,

  labelMovementRange: sizeTolabelMovementRange[size],
  toggleIconDisplay: sizeTotoggleIconDisplay[size],

  backgroundColor: skinToBackgroundColor[skin],
  backgroundColorChecked: skinToBackgroundColorChecked[skin],
  backgroundColorDisabled: palette.disabledButton,
  backgroundColorHover: skinToHoverBackgroundColor[skin],

  color: skinToColor[skin],
  colorChecked: skinToColorChecked[skin],
  colorDisabled: palette.disabledDividers,
  colorCheckedDisabled: palette.disabledButton,
  colorHover: skinToHoverColor[skin]
});
