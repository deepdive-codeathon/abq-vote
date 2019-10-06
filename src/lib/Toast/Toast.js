import React from 'react';
import {ToastAndroid, View} from 'react-native';
import colors from '../../themes/Colors';

let toast;

// a component that calls the imperative ToastAndroid API
const Toast = props => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggle = () => {
    this.setState(
      {
        visible: true,
      },
      () => {
        this.hideToast();
      },
    );
  };

  hideToast = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Toast visible={this.state.visible} message="Example" />
        <Button title="Toggle Modal" onPress={this.handleButtonPress} />
      </View>
    );
  }
}
