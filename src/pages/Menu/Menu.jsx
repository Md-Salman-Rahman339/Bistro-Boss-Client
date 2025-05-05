import React from 'react';

import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

import soupImg from '../../assets/menu/soup-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';

import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div className='mb-10'>
    

      {/* Main Cover Image */}
      <Cover img={menuImg} title="Our Menu" />

      {/* Today's Offer */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
      <MenuCategory items={offered} />

      {/* Other Menu Categories */}
      <MenuCategory items={desserts} title="Dessert" img={dessertImg} />
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg} />
      <MenuCategory items={salad} title="Salad" img={saladImg} />
      <MenuCategory items={soup} title="Soup" img={soupImg} />
    </div>
  );
};

export default Menu;
