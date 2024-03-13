import { getProductById } from '../data/products'
import ProductSpecification from './ProductSpecifications'
import { useParams } from 'react-router-dom'

import PropTypes from 'prop-types'

const ProductInfo = () => {
  const { id } = useParams()
  const product = getProductById(id)

  return (
    <div className="flex flex-wrap flex-col items-center w-full md:flex-row md:items-start md:justify-around p-10">
      <div className="md:w-2/5  shadow-xl h-fit border-4 border-slate-100	rounded-lg	">
        <img width="100%" height="100%" src="/static/images/ac.png" alt="ac" />
      </div>
      <div className="md:w-3/5 pl-10">
        <div className="text-2xl font-semibold mb-8"> {product.title}</div>
        <div className="mb-8">
          <div className="text-xl font-medium mb-6">Product Description</div>
          {product.detailedDescription &&
            product.detailedDescription.map((item, idx) => (
              <div key={idx}>
                <div className="text-lg mt-4 mb-3 text-slate-800">
                  {item.title}
                </div>
                <div className="text-sm text-slate-600">{item.desc}</div>
              </div>
            ))}
        </div>

        <div>
          <div className="text-xl font-medium mb-6">Specifications</div>
          {product.specifications && (
            <ProductSpecification details={product.specifications} />
          )}
        </div>
      </div>
    </div>
  )
}

ProductInfo.propTypes = {
  id: PropTypes.string,
}

export default ProductInfo
