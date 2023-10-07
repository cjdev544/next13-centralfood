import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from '@/firebase/config'
import {
  type Product,
  type DataHome,
  ProductsSection,
  type Restaurant,
} from '@/types.d'

export const getProducts = async () => {
  const array: any[] = []
  const q = query(collection(db, 'products'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })
  const productsAbalaible = (array as Product[]).filter(
    (product) => product.disponible
  )
  return productsAbalaible
}

export const getProduct = async (productId: string) => {
  const productRef = doc(db, 'products', productId)
  const docSnap = await getDoc(productRef)

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id } as Product
  }
}

export const getDataHomepage = async () => {
  const array: any[] = []
  const q = query(collection(db, 'homepage'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })
  return array as DataHome[]
}

export const getRestaurants = async () => {
  const array: any[] = []
  const q = query(collection(db, 'restaurants'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })
  return array as Restaurant[]
}

export const getPopularProducts = async () => {
  let productsData: Product[] = []
  const dataHome = await getDataHomepage()
  const products = await getProducts()
  const popularSection = dataHome.find(
    (section) => section.id === ProductsSection.POPULAR_PRODUCTS
  )
  popularSection?.productsSection.forEach((productId) => {
    const productSectionAvailable = products.find(
      (product) => product.id === productId && product.disponible
    )
    if (productSectionAvailable) productsData.push(productSectionAvailable)
  })
  return { title: popularSection?.title, productsData }
}

export const getPromotionProducts = async () => {
  let productsData: Product[] = []
  const dataHome = await getDataHomepage()
  const products = await getProducts()
  const promotionSection = dataHome.find(
    (section) => section.id === ProductsSection.PROMOTION_PRODUCTS
  )
  promotionSection?.productsSection.forEach((productId) => {
    const productSectionAvailable = products.find(
      (product) => product.id === productId && product.disponible
    )
    if (productSectionAvailable) productsData.push(productSectionAvailable)
  })
  return { title: promotionSection?.title, productsData }
}
