import {StyleSheet} from 'react-native';
import colors from '../themes/Colors';
import metrics from '../themes/Metrics';

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  section: {
    padding: metrics.s20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowSpread: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  justifyCenter: {
    justifyContent: 'center',
  },
});

export default viewStyles;
