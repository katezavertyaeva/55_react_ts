import { ProductProps } from "./types";
import './styles.css'

function Product({ productName, productPrice }: ProductProps) {
  return (
    <div className="product-container">
      <div>Product: {productName}</div>
      <div>Price: {productPrice}</div>
    </div>
  )
}

export default Product;