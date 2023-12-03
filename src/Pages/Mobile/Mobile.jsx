/* eslint-disable */ 
import { useLoaderData } from 'react-router-dom';
import { Product } from './Product';
const Mobile = () => {
    const products = useLoaderData();
    console.log(products)
  return (
    <>
    {
     products.map(product=>{
      return<li>
        {product.title}
        {product.price}
        {product.description}
      </li>
     }) 
      }
        mobile
        
        
    </>
  )
}

export default Mobile