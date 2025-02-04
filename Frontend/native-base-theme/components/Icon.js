// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const iconTheme = {
    fontSize: variables.iconFontSize*2,

    color: variables.textColor
  };

  return iconTheme;
};
