'use client'

import Product from '@/components/Product'

// const ProductModal = dynamic(import('../modals/ProductModal'))

import Transition from '../Transition'
import style from './Plates.module.css'
import { usePlatesCategory } from '../usePlatesCategory'

export default function Plates() {
  // const [openModal, setOpenModal] = useState(false)
  const { category, productsCategory } = usePlatesCategory({})
  console.log({ productsCategory })
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
