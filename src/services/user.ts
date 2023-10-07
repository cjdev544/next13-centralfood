import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { type User, type UserDB } from '@/types.d'

export const getUsers = async () => {
  const array: UserDB[] = []
  const q = query(collection(db, 'users'))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    array.push({ uid: doc.id, ...doc.data() } as UserDB)
  })
  return array
}

export const createUser = async (user: User) => {
  const docRef = doc(db, 'users', user.uid)
  await setDoc(docRef, {
    uid: user.uid,
    email: user.email,
    username: user.displayName,
  })
}
