import React from 'react';
import { View, Animated } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import Tab from './Tab';
import createStyle from './css';
import TabContent from './TabContent';

export default function Swipeable({ children }) {
  const styles = createStyle()
  const childrenLength = children.length;
  const scrollX = new Animated.Value(0);
  const interpolators = Array.from({ length: childrenLength }, (_, i) => i).map(idx => ({
    scale: scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: [1, 1.2, 1],
      extrapolate: 'clamp',
    }),
    opacity: scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    }),
    textColor: scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['#000', '#4ad295', '#000'],
    }),
    backgroundColor: scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['rgba(0,0,0,0.1)', '#000', 'rgba(0,0,0,0.1)'],
      extrapolate: 'clamp',
    }),
  }));
  return (
    <View style={{ flex: 1, flexGrow: 1, overflow: 'hidden', }}>
      <ScrollableTabView
        renderTabBar={() => (
          <TabBar
            underlineColor="transparent"
            tabBarStyle={{
              marginTop: 0,
              backgroundColor: "#fff",
              borderBottomWidth: 0,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 10,
              // width: '100%',
            }}
            renderTab={(tab, page, isTabActive, onPressHandler, onTabLayout) => (
              <Tab
                key={page}
                tab={tab}
                page={page}
                length={childrenLength}
                isTabActive={isTabActive}
                onPressHandler={onPressHandler}
                onTabLayout={onTabLayout}
                styles={interpolators[page]}
              />
            )}
          />
        )}
        onScroll={(x) => scrollX.setValue(x)}
      >
        {React.Children.map(children, child => (
          <TabContent tabLabel={{
            label: child.props.label,
            icon: child.props.icon
          }}>
            {React.cloneElement(child)}
          </TabContent>
        ))}
      </ScrollableTabView>
    </View>
  );
}