import React, {useState} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import {useRef, useImperativeHandle, forwardRef} from 'react';
import {Container} from '.';
import {Button} from 'react-native-paper';
import Modal from 'react-native-modal';
import metrics from '../themes/Metrics';
import viewStyles from '../styles/ViewStyles';
import colors from '../themes/Colors';

function BottomPanel(props, ref) {
  const [visible, setVisibility] = useState(false);

  const _hide = () => {
    setVisibility(false);
  };

  const panelRef = useRef();

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisibility(true);
    },
    hide: () => {
      _hide();
    },
  }));

  return (
    <Modal
      swipeDirection={['down', 'right']}
      hideModalContentWhileAnimating
      isVisible={visible}
      avoidKeyboard={true}
      swipeThreshold={100}
      onSwipeComplete={() => _hide()}
      onBackButtonPress={() => _hide()}
      useNativeDriver={true}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}>
      <Container style={[{flex: 0.5}]}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Button
            style={{marginBottom: 10}}
            color={'white'}
            onPress={() => setVisibility(false)}>
            OK
          </Button>
        </View>

        <Container style={{padding: 20, backgroundColor: colors.blueGrey900}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Lorem Ipsum
          </Text>
        </Container>
      </Container>
    </Modal>
  );
}

BottomPanel = forwardRef(BottomPanel);

export default BottomPanel;
