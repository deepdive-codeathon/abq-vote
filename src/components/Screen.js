import React from 'react';
import viewStyles from '../styles/ViewStyles';
import ViewX from './View';
import colors from '../themes/Colors';
import useTheme from '../themes/Context';

export default ({style, ...other}) => {
  return (
    <ViewX
      {...other}
      style={[viewStyles.container, style, {backgroundColor: '#dddddd'}]}
      useSafeAreaView
    />
  );
};

//class used for hot loading
export class Container extends React.Component {
  render() {
    return <ContainerComponent {...this.props} />;
  }
}

const ContainerComponent = ({style, bg, ...other}) => {
  const {theme} = useTheme();

  return (
    <ViewX
      {...other}
      style={[
        viewStyles.container,
        {backgroundColor: bg ? theme.colors.background : 'transparent'},
        style,
      ]}
    />
  );
};
