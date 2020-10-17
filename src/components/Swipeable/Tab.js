import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';

const Tab = ({ tab, page, isTabActive, onPressHandler, onTabLayout, styles, length }) => {
  const { label, icon } = tab;
  const style = {
    // marginHorizontal: 2,
    // flex: 1,
    // width: '100%',
    paddingVertical: 10,
  };
  const containerStyle = {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: styles.backgroundColor,
    opacity: styles.opacity,
    // transform: [{ scale: styles.opacity }],
  };
  const textStyle = {
    color: styles.textColor,
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  };
  const iconStyle = {
    tintColor: styles.textColor,
    resizeMode: 'contain',
    width: 24,
    height: 24,
    marginBottom: 10,
    // marginRight: 10,
  };
  const lastItemStyle = page == length - 1 ? { paddingRight: 0 } : {}
  return (
    <TouchableOpacity style={style} onPress={onPressHandler} onLayout={onTabLayout} key={page}>
      <Animated.View style={{ ...containerStyle, ...lastItemStyle }}>
        {icon && <Animated.Image style={iconStyle} source={icon} />}
        {label && <Animated.Text style={textStyle}>{label}</Animated.Text>}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Tab;