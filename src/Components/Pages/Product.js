import React, { useContext } from 'react'
import { ShopContext } from '../Contexts/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrums/Breadcrum';
import PorductDisplay from '../ProductDisplay/PorductDisplay';
import Descrption from '../Description/Descrption';
import RelatedProduct from '../RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const { productId}=useParams();
  const product= all_product.find((e)=>e.id===Number(productId))
  return (

    <div>
      <Breadcrum product={product}/>
      <PorductDisplay product={product} />
      <Descrption/>
      <RelatedProduct/>
    </div>
  )
}

export default Product;