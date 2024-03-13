import { products } from '../data/products'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className="flex justify-center my-10">
      <div className=" grid lg:grid-cols-3 lg:gap-8 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {products.map((product, idx) => (
          <div key={idx}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
