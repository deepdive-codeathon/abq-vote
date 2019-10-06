// import React from 'react';
// import { ToastAndroid } from 'react-native';
// import colors from '../../themes/Colors';

// let toast;

// // a component that calls the imperative ToastAndroid API
// const Toast = props => {
//   if (props.visible) {
//     ToastAndroid.showWithGravityAndOffset(
//       props.message,
//       ToastAndroid.LONG,
//       ToastAndroid.BOTTOM,
//       25,
//       50
//     );
//     return null;
//   }
//   return null;
// };

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//     };
//   }

//   toggle = () => {
//     this.setState(
//       {
//         visible: true,
//       },
//       () => {
//         this.hideToast();
//       }
//     );
//   };

//   hideToast = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Toast visible={this.state.visible} message="Example" />
//         <Button title="Toggle Modal" onPress={this.handleButtonPress} />
//       </View>
//     );
//   }
// }

// export default function showToast(message, type, duration = 2000) {
//   Toast.toggle(message, {
//     position: -1,
//     duration: duration,
//     textColor: colors.richBlack,

//     containerStyle: {
//       backgroundColor:
//         type == 'success'
//           ? colors.androidGreen
//           : type == 'error'
//           ? colors.rustyRed
//           : type == 'info'
//           ? colors.tiffanyBlue
//           : 'white',

//       borderRadius: 10,
//       padding: 20,
//       margin: 10,
//     },
//   });
// }

// export function hideToast()
//  {
//   this.setState({
//     visible: false,
//   })
// }

// export function hideLoading() {
//   Toast.hide(toast);
// }

// export function showLoading(message = '') {
//   toast = Toast.showLoading(message, {
//     position: 0,
//     containerStyle: {
//       padding: 30,
//       backgroundColor: 'rgba(0,0,0, 0.7)',
//     },
//     textColor: 'white',
//     textstyle: {fontSize: 16},
//     // maskColor:'rgba(10, 10, 10, 0.5)'
//   });
// }

// export function showErrorToast(message) {
//   showToast(message, 'error');
// }

// export function showSuccessToast(message) {
//   showToast(message, 'success');
// }

// export function showInfoToast(message) {
//   showToast(message, 'info');
// }
