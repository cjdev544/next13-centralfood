import Complement from './Complement'
import { getProductsComplements } from '../utils/getProductsComplements'
import { type Product } from '@/types.d'
import styles from '../ProductModal.module.css'

interface Props {
  products: Product[]
  product: Product
  setComplements: React.Dispatch<React.SetStateAction<Product[]>>
}

export default function ProductsComplements({
  product,
  products,
  setComplements,
}: Props) {
  const { extras, drinks, beer, desserts } = getProductsComplements(
    products,
    product
  )

  return (
    <div className={styles.left}>
      <p className={styles.extra}>Extras</p>
      {extras.map((product) => (
        <Complement
          key={product.id}
          product={product}
          setComplements={setComplements}
        />
      ))}

      {/* Drinks */}
      <p className={styles.extra}>Bebidas</p>
      {drinks.map((product) => (
        <Complement
          key={product.id}
          product={product}
          setComplements={setComplements}
        />
      ))}

      {/* Desserts */}
      <p className={styles.extra}>Postres</p>
      {desserts.map((product) => (
        <Complement
          key={product.id}
          product={product}
          setComplements={setComplements}
        />
      ))}

      {/* Beer */}
      <p className={styles.extra}>Cervezas</p>
      {beer.map((product) => (
        <Complement
          key={product.id}
          product={product}
          setComplements={setComplements}
        />
      ))}
    </div>
  )
}
