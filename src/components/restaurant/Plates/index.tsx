import Product from '@/components/Product'
import Transition from '../Transition'
import { type Product as ProductType } from '@/types.d'
import style from './Plates.module.css'

interface Props {
  category: string | null
  productsCategory: ProductType[]
}

export default function Plates({ category, productsCategory }: Props) {
  // const [openModal, setOpenModal] = useState(false)
  return (
    <div className={style.homePlates}>
      <div className={style.opacity}>
        <div className={style.background}>
          <Transition category={category}>
            <h2 className={style.title}>{category}</h2>
            <div className={style.products}>
              {productsCategory.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  // setOpenModal={setOpenModal}
                  // setProduct={setProduct}
                />
              ))}
            </div>
          </Transition>
        </div>
      </div>
      {/* {openModal && (
        <ProductModal
          setOpenModal={setOpenModal}
          products={products}
          product={product}
          restaurants={restaurants}
        />
      )} */}
    </div>
  )
}
