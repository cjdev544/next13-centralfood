import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore'
import { db } from '@/firebase/config'
// 7esciPwRBvM6S7wmDSpkZMJmmDh2
export const getOrdersUser = async (userId: string) => {
  const array: any[] = []
  const q = query(collection(db, 'orders'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    if (doc.data().usuario === userId) {
      array.push({ id: doc.id, ...doc.data() })
    }
  })
  return array
}

export const getUserOrders = async (userId: string) => {
  const array: any[] = []
  const ordersRef = collection(db, 'orders')
  const q = query(ordersRef, where('usuario', '==', userId))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, ...doc.data() })
  })
  const sortOrders = array?.sort((a, b) => b.createdAt - a.createdAt)
  return sortOrders
}

export const addNewOrder = async (order: any) => {
  const orderRef = doc(db, 'orders', order.id)
  await setDoc(orderRef, order)
  return order
}

export const updateOrder = async (order: any) => {
  const orderRef = doc(db, 'orders', order.id)
  await updateDoc(orderRef, { ...order, orderSend: true })
}
