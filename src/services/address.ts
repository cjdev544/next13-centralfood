import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { auth, db } from '@/firebase/config'
import { v4 as uuidv4 } from 'uuid'
import { type AddressDB } from '@/types.d'

export const getAddressesUser = async (userId: string) => {
  const array: AddressDB[] = []
  const q = query(collection(db, 'addresses'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    if (doc.data().user === userId) {
      array.push({ id: doc.id, ...doc.data() } as AddressDB)
    }
  })
  return array
}

export const createAddress = async (address: AddressDB) => {
  const addressId = uuidv4()
  const addressRef = doc(db, 'addresses', addressId)
  const user = auth.currentUser

  await setDoc(addressRef, {
    ...address,
    user: user?.uid,
  })
}

export const updateAddress = async (address: any, updateAddress: any) => {
  const addressRef = doc(db, 'addresses', address.id)
  await updateDoc(addressRef, updateAddress)
}

export const deleteAddress = async (address: any) => {
  const addressRef = doc(db, 'addresses', address.id)
  await deleteDoc(addressRef)
}
