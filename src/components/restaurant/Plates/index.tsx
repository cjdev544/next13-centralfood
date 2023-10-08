import Products from '@/components/Products'
import Transition from '../Transition'
import { getProducts } from '@/services/products'
import { type Product as ProductType } from '@/types.d'
import style from './Plates.module.css'

interface Props {
  category: string | null
  products: ProductType[]
  productsCategory: ProductType[]
}

export default function Plates({
  category,
  products,
  productsCategory,
}: Props) {
  return (
    <div className={style.homePlates}>
      <div className={style.opacity}>
        <div className={style.background}>
          <Transition category={category}>
            <h2 className={style.title}>{category}</h2>
            <Products products={products} productsToMap={productsCategory} />
          </Transition>
        </div>
      </div>
    </div>
  )
}
