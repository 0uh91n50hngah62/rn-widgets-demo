import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    width: 224,
    backgroundColor: '#af55',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lowThumbContainer: {

  },
  highThumbContainer: {
    position: 'absolute',
  },
  railsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'red',
  },
  touchableArea: {
    ...StyleSheet.absoluteFillObject,
  },
});
