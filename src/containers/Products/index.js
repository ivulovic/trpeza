import React from 'react';
import { iconsSet } from './data';
import ProductList from './ProductList';
import Swipeable from '../../components/Swipeable';
import SwipeableContent from '../../components/Swipeable/SwipeableContent';

export default function ProductsPage() {
  const tabs = [
    { label: 'Namirnice', icon: iconsSet.groceries, childrenProps: { category: 'groceries' } },
    { label: 'Voće', icon: iconsSet.fruit, childrenProps: { category: 'fruit' } },
    { label: 'Povrće', icon: iconsSet.vegetables, childrenProps: { category: 'vegetables' } },
    { label: 'Meso', icon: iconsSet.meatAndFish, childrenProps: { category: 'meatAndFish' } },
    { label: 'Mlečni', icon: iconsSet.dairy, childrenProps: { category: 'dairy' } },
    { label: 'Zamrznuti', icon: iconsSet.frozen, childrenProps: { category: 'frozen' } },
    { label: 'Piće', icon: iconsSet.drinks, childrenProps: { category: 'drinks' } },
  ]
  return (
    <Swipeable>
      {tabs.map(({ label, icon, childrenProps }) => <SwipeableContent key={label} label={label} icon={icon}>
        <ProductList {...childrenProps} />
      </SwipeableContent>)}
    </Swipeable>
  );
}