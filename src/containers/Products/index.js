import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import TabContent from './TabContent';
import Tab from './Tab';
import { iconsSet } from './data';
import createStyle from './css';
import ProductList from './ProductList';

const Page = ({ category }) => (
  <TabContent>
    <ProductList category={category} />
  </TabContent>
);

export default function ProductsPage() {
  const styles = createStyle()
  const childrenLength = 7;
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
    <View style={{ flex: 1, flexGrow: 1, }}>

      {/* <View style={styles.homeHeader}>
        <Text style={styles.pageTitle}>Trpeza</Text>
      </View> */}
      <View />
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
          {/* <Page tabLabel={{ label: "Proizvodi", icon: iconsSet.all }} category="all" /> */}
          <Page tabLabel={{ label: "Namirnice", icon: iconsSet.groceries }} category="groceries" />
          <Page tabLabel={{ label: "Voće", icon: iconsSet.fruit }} category="fruit" />
          <Page tabLabel={{ label: "Povrće", icon: iconsSet.vegetables }} category="vegetables" />
          <Page tabLabel={{ label: "Meso", icon: iconsSet.meatAndFish }} category="meatAndFish" />
          <Page tabLabel={{ label: "Mlečni", icon: iconsSet.dairy }} category="dairy" />
          <Page tabLabel={{ label: "Zamrznuti", icon: iconsSet.frozen }} category="frozen" />
          <Page tabLabel={{ label: "Piće", icon: iconsSet.drinks }} category="drinks" />
        </ScrollableTabView>
      </View>
    </View >
  );
}