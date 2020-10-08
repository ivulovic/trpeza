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

export default function HomePage() {
  const styles = createStyle()

  const scrollX = new Animated.Value(0);
  const interpolators = Array.from({ length: 8 }, (_, i) => i).map(idx => ({
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
      outputRange: ['#000', '#fff', '#000'],
    }),
    backgroundColor: scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['rgba(0,0,0,0.1)', '#000', 'rgba(0,0,0,0.1)'],
      extrapolate: 'clamp',
    }),
  }));
  return (
    <View style={{ flex: 1, flexGrow: 1, }}>

      <View style={styles.homeHeader}>
        <Text style={styles.pageTitle}>Trpeza</Text>
      </View>

      <View style={{ flex: 1, flexGrow: 1, }}>
        <ScrollableTabView
          renderTabBar={() => (
            <TabBar
              underlineColor="#000"
              tabBarStyle={{ backgroundColor: "#fff", borderTopColor: '#d2d2d2', borderTopWidth: 1, marginTop: 0, }}
              renderTab={(tab, page, isTabActive, onPressHandler, onTabLayout) => (
                <Tab
                  key={page}
                  tab={tab}
                  page={page}
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
          <Page tabLabel={{ label: "Svi proizvodi", icon: iconsSet.all }} category="all" />
          <Page tabLabel={{ label: "Namirnice", icon: iconsSet.groceries }} category="groceries" />
          <Page tabLabel={{ label: "Voće i povrće", icon: iconsSet.fruitAndVegetables }} category="fruitAndVegetables" />
          <Page tabLabel={{ label: "Meso i riba", icon: iconsSet.meatAndFish }} category="meatAndFish" />
          <Page tabLabel={{ label: "Mlečni proizvodi", icon: iconsSet.dairy }} category="dairy" />
          <Page tabLabel={{ label: "Zamrznuta hrana", icon: iconsSet.frozen }} category="frozen" />
          <Page tabLabel={{ label: "Piće", icon: iconsSet.drinks }} category="drinks" />
          <Page tabLabel={{ label: "Hrana za decu", icon: iconsSet.baby }} category="child" />
        </ScrollableTabView>
      </View>
    </View>
  );
}