import { useState } from 'react';
 import orderCoverImg from '../../assets/shop/banner2.jpg'

 import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
 import 'react-tabs/style/react-tabs.css';

import Cover from '../../pages/Shared/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
 import { useParams } from 'react-router';

 
 const Order = () => {
    const { category } = useParams();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
     const [tabIndex, setTabIndex] = useState(0);

     const [menu] = useMenu();
     const initialIndex = categories.indexOf(category);
     const desserts = menu.filter(item => item.category === 'dessert');
     const soup = menu.filter(item => item.category === 'soup');
     const salad = menu.filter(item => item.category === 'salad');
     const pizza = menu.filter(item => item.category === 'pizza');
     const drinks = menu.filter(item => item.category === 'drinks');
     
     return (
         <div>
          
             <Cover img={orderCoverImg} title="Order Food"></Cover>
             <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                 <TabList>
                     <Tab>Salad</Tab>
                     <Tab>Pizza</Tab>
                     <Tab>Soup</Tab>
                     <Tab>Dessert</Tab>
                     <Tab>Drinks</Tab>
                 </TabList>
                 <TabPanel>
                     <OrderTab items={salad}></OrderTab>
                 </TabPanel>
                 <TabPanel>
                     <OrderTab items={pizza}></OrderTab>
                 </TabPanel>
                 <TabPanel>
                     <OrderTab items={soup}></OrderTab>
                 </TabPanel>
                 <TabPanel>
                     <OrderTab items={desserts}></OrderTab>
                 </TabPanel>
                 <TabPanel>
                     <OrderTab items={drinks}></OrderTab>
                 </TabPanel>
             </Tabs>
         </div>
     );
 };
 
 export default Order;