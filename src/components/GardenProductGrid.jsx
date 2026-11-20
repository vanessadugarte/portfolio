import { Link } from 'react-router-dom'
import { paths } from '../routes/paths.js'
import { formatGardenPrice } from '../utils/formatGardenPrice.js'

export default function GardenProductGrid({ kind, products, localizedProducts, language, priceLabel }) {
  const routeKind = kind === 'plants' ? 'plantas' : 'maceteros'

  return (
    <ul className="garden-replica-products">
      {products.map((product) => (
        <li key={product.id}>
          <Link to={paths.gardenProduct(routeKind, product.slug)}>
            <img
              src={product.image}
              alt={localizedProducts[product.id].alt}
              width="255"
              height="226"
              loading="lazy"
              decoding="async"
            />
            <span className="garden-replica-product-name">{localizedProducts[product.id].name}</span>
            <span className="garden-replica-product-price">
              <span className="garden-visually-hidden">{priceLabel}: </span>
              {formatGardenPrice(product.priceCLP, language)}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
