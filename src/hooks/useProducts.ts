import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { round } from 'mathjs'

import { useProductsStore } from '@/store/products'
import { type Restaurant, type Product } from '@/types.d'
import { useLocalStorage } from './useLocalStorage'
import { toast } from 'react-toastify'

interface Params {
  restaurants: Restaurant[]
  openOrCloseModal: (value: boolean) => void
}

export function useProducts({ restaurants, openOrCloseModal }: Params) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [counterProduct, setCounterProduct] = useState(1)
  const [productCost, setProductCost] = useState(0)
  const [complementsCost, setComplementsCost] = useState(0)
  const [total, setTotal] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  // Products modifications
  const [isPepper, setIsPepper] = useState(false)
  const [selectPepper, setSelectPepper] = useState(false)
  const [pepperPlate, setPepperPlate] = useState<Product | null>(null)
  const [isJalapeño, setIsJalapeño] = useState(false)
  const [selectJalapeño, setSelectJalapeño] = useState(false)
  const [jalapeñoPlate, setJalapeñoPlate] = useState<Product | null>(null)

  const products = useProductsStore((state) => state.products)
  const product = useProductsStore((state) => state.product)
  const loadProducts = useProductsStore((state) => state.loadProducts)
  const selectProduct = useProductsStore((state) => state.selectProduct)
  const [complements, setComplements] = useState<Product[]>([])

  const { addProductCart } = useLocalStorage()

  const router = useRouter()

  useEffect(() => {
    const restaurantProduct = restaurants.find(
      (restaurant) => restaurant.page === product?.restaurante
    )
    if (restaurantProduct) setRestaurant(restaurantProduct)
  }, [product, restaurants])

  useEffect(() => {
    setProductCost(round(Number(product?.precio) * counterProduct, 2))
  }, [counterProduct, product])

  useEffect(() => {
    let total = 0
    if (complements.length === 0) {
      setComplementsCost(0)
    } else {
      complements.forEach((complement) => {
        total = round(Number(complement.precio) + total, 2)
        setComplementsCost(total)
      })
    }
  }, [complements])

  useEffect(() => {
    setTotal(round(productCost + complementsCost, 2))
  }, [productCost, complementsCost])

  useEffect(() => {
    if (product) {
      const plateIsPepper = product.path.includes('noodles')
      if (plateIsPepper) {
        setIsPepper(true)
      } else {
        setIsPepper(false)
      }
    }
  }, [product])

  useEffect(() => {
    if (product) {
      const plateIsJalapeño = product.path.includes('burrito')
      if (plateIsJalapeño) {
        setIsJalapeño(true)
      } else {
        setIsJalapeño(false)
      }
    }
  }, [product])

  useEffect(() => {
    if (isPepper) {
      let msg
      if (selectPepper) {
        msg = '(Con Picante)'
      } else {
        msg = '(Sin Picante)'
      }
      setPepperPlate({
        ...product,
        nombre: `${product?.nombre} ${msg}`,
      } as Product)
    }
  }, [product, isPepper, selectPepper])

  useEffect(() => {
    if (isJalapeño) {
      let msg
      if (selectJalapeño) {
        msg = '(Con Jalapeño)'
      } else {
        msg = '(Sin Jalapeño)'
      }
      setJalapeñoPlate({
        ...product,
        nombre: `${product?.nombre} ${msg}`,
      } as Product)
    }
  }, [product, isJalapeño, selectJalapeño])

  const plusProduct = () => {
    setCounterProduct((prev) => prev + 1)
  }

  const minusProduct = () => {
    setCounterProduct((prev) => {
      if (prev > 1) return prev - 1
      return 1
    })
  }

  const addToCart = () => {
    if (!restaurant?.isOpen) {
      toast.warning(
        `${restaurant?.name} se encuentra cerrado en estos momentos`
      )
      return
    }
    if (isPepper) {
      addProductCart({ ...pepperPlate, number: counterProduct } as Product)
      complements.forEach((complement) => {
        addProductCart({ ...complement, number: 1 })
      })
    } else if (isJalapeño) {
      addProductCart({ ...jalapeñoPlate, number: counterProduct } as Product)
      complements.forEach((complement) => {
        addProductCart({ ...complement, number: 1 })
      })
    } else {
      addProductCart({ ...product, number: counterProduct } as Product)
      complements.forEach((complement) => {
        addProductCart({ ...complement, number: 1 })
      })
    }
    router.push('/')
    openOrCloseModal(false)
  }

  return {
    counterProduct,
    isJalapeño,
    isPepper,
    product,
    productCost,
    products,
    restaurant,
    selectJalapeño,
    selectPepper,
    total,
    addToCart,
    loadProducts,
    minusProduct,
    plusProduct,
    selectProduct,
    setComplements,
    setSelectJalapeño,
    setSelectPepper,
  }
}
