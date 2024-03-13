import PropTypes from 'prop-types'

const ProductSpecification = ({ details }) => {
  const renderKeyValuePairs = (obj) => {
    return Object.entries(obj).map(([key, value]) => (
      <li className="relative w-full lg:flex" key={key}>
        <div className="lg:w-1/4 lg:inline-block text-wrap text-slate-500">
          {key}:
        </div>{' '}
        <div className="lg:w-3/4 inline-block text-wrap">
          {' '}
          {typeof value === 'object'
            ? renderKeyValuePairs(value)
            : value.toString()}
        </div>
      </li>
    ))
  }

  const renderSections = () => {
    return Object.entries(details).map(([section, data]) => (
      <div key={section}>
        <h2 className="text-xl mt-4 mb-3 text-slate-800 my-3 flex items-center">
          <span>{section.replace(/^\w/, (c) => c.toUpperCase())}</span>
        </h2>
        <ul>{renderKeyValuePairs(data)}</ul>
        <hr className="mt-4" />
      </div>
    ))
  }

  return <div>{renderSections()}</div>
}

ProductSpecification.propTypes = {
  details: PropTypes.object,
}
export default ProductSpecification
