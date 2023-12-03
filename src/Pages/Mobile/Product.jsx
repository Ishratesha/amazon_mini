/* eslint-disable */ 
export const Product = ({product}) => {
  const [title,price ] =product
    return (
    <>
     <li>{title}</li>
     <li>{price}</li>
    </>
  )
}
