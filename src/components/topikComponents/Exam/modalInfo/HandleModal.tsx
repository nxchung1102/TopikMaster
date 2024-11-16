import {Animated, Easing} from 'react-native';
import {
  openModalType,
  closeModalType,
  confirmModalType,
} from '../../../../util/GlobalType';

export const handleOpenModal = (props: openModalType) => {
  const {modalHeight, handleState, screenHeight, slideAnim} = props;
  handleState();
  Animated.timing(slideAnim, {
    toValue: (screenHeight - modalHeight) / 2,
    duration: 500,
    easing: Easing.out(Easing.cubic),
    useNativeDriver: true,
  }).start();
};
export const handleCloseModal = (props: closeModalType) => {
  const {slideAnim, handleState} = props;
  Animated.timing(slideAnim, {
    toValue: -500,
    duration: 500,
    easing: Easing.in(Easing.cubic),
    useNativeDriver: true,
  }).start(() => handleState());
};

export const handleConfrmModal = (props: confirmModalType) => {
  const {slideAnim, handleState, params, navigation, routeName} = props;
  Animated.timing(slideAnim, {
    toValue: -500,
    duration: 500,
    easing: Easing.in(Easing.cubic),
    useNativeDriver: true,
  }).start(() => handleState());
  navigation.navigate(routeName, params);
};
