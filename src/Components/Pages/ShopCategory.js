import React, { useContext } from 'react'
import "./ShopCategory.css";
import { ShopContext } from '../Contexts/ShopContext'
import dropdown_icon from "../Assets/dropdown_icon.png"
import Item from '../Items/Item';


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='softcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shop-category-sort'>
        sort by <img src={dropdown_icon} alt='' />
      </div>
      </div>
      
      <div className='softcategory-products'>
        {
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return (<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />);

            }
            else {
              return null;
            }

          })
        }
      </div>
      <div className='shopcategory-loadmore'>
        Explore more
      </div>




    </div>
  )
}

export default ShopCategory;