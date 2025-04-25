import React from 'react'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import Cover from '../../Shared/Cover/Cover' 

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      <div className='pt-8'>
        {title && <Cover img={img} title={title} />}
        <div className="grid md:grid-cols-2 gap-10 my-16">
          {items.map(item => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuCategory;
