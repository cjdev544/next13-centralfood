import { useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  updateEmail,
  updatePassword,
  User,
} from 'firebase/auth'
import { toast } from 'react-toastify'

import { auth, googleProvider } from '@/firebase/config'
import { getUsers, createUser } from '@/services/user'
import { useUserState } from '@/store/auth'
import { type AuthUser } from '@/types.d'

export function useAuth() {
  const [user, setUser] = useState<any | null>(null)
  const authUser = useUserState((state) => state.auth)
  const setAuthUser = useUserState((state) => state.setAuth)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setUser(user)
        const { uid, displayName, email, photoURL, providerData } = user
        const provider = providerData[0].providerId

        if (!authUser?.uid) {
          setAuthUser({
            uid,
            displayName,
            email,
            photoURL,
            provider,
          } as AuthUser)
        }
      } else {
        setAuthUser(null)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (authUser?.uid) {
      checkUserExistInDataBase()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser])

  const checkUserExistInDataBase = () => {
    getUsers().then((res) => {
      const userExist = res?.find((user) => user.uid === authUser?.uid)
      if (!userExist) createUserDataBase()
    })
  }

  const createUserDataBase = () => {
    if (user) createUser(user)
  }

  const stateChangeWithPassword = (displayName: string) => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        const { uid, email, photoURL, providerData } = user
        const provider = providerData[0].providerId

        if (!authUser?.uid) {
          setAuthUser({
            uid,
            displayName,
            email,
            photoURL,
            provider,
          } as AuthUser)
        }
      } else {
        setAuthUser(null)
      }
    })
  }

  const stateChangeWithProvider = () => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        if (!authUser?.uid) {
          if (user?.displayName) setAuthUser(user)
        }
      } else {
        setAuthUser(null)
      }
    })
  }

  const startWithGoogle = async (
    setOpenModal: (openOrClose: boolean) => void,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    try {
      await signInWithPopup(auth, googleProvider)
      stateChangeWithProvider()
      setIsLoading(false)
      setOpenModal(false)
    } catch (err) {
      setIsLoading(false)
      setOpenModal(false)
      console.log(err)
      toast.error('Error al conectar con Gmail! intente mas tarde')
    }
  }

  const registerWithEmailAndPassword = async (
    email: string,
    password: string,
    displayName: string,
    setOpenModal: (openOrClose: boolean) => void,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await updateProfile(credentials.user, { displayName })
      stateChangeWithPassword(displayName)
      setIsLoading(false)
      setOpenModal(false)
    } catch (err: any) {
      setIsLoading(false)

      if (err.code === 'auth/email-already-in-use') {
        toast.error('El correo ya se encuentra registrado')
        return
      }

      toast.error('Error en el servidor! intente mas tarde')
    }
  }

  const loginWhitEmailAndPassword = async (
    emailUser: string,
    password: string,
    setOpenModal: (openOrClose: boolean) => void,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    try {
      await signInWithEmailAndPassword(auth, emailUser, password)
      setIsLoading(false)
      setOpenModal(false)
    } catch (err: any) {
      setIsLoading(false)

      if (err.code === 'auth/wrong-password') {
        toast.error('Combinación de correo y contraseña no es correcta')
        return
      }

      if (err.code === 'auth/user-not-found') {
        toast.error('Correo no registrado')
        return
      }

      toast.error('Error en el servidor! intente mas tarde')
    }
  }

  const updateName = async (
    formData: any,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    try {
      const user = auth.currentUser
      if (user) {
        await updateProfile(user, {
          displayName: `${formData.name} ${formData.lastname}`,
        })
        setAuthUser({
          ...authUser,
          displayName: `${formData.name} ${formData.lastname}`,
        } as AuthUser)
      }
      toast.success('El nombre fue cambiado correctamente')
      setIsLoading(false)
    } catch (err) {
      toast.error('Error al cambiar el nombre')
      setIsLoading(false)
    }
  }

  const updateEmailUser = async (
    formData: any,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
      await updateEmail(userCredential.user, formData.newEmail)
      setAuthUser({
        ...authUser,
        email: formData.newEmail,
      } as AuthUser)
      toast.success('El email fue cambiado correctamente')
      setIsLoading(false)
    } catch (err) {
      toast.error('Error al cambiar el correo')
      setIsLoading(false)
    }
  }

  const updatePasswordUser = async (
    formData: any,
    setIsLoading: (isLoading: boolean) => void
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )

      await updatePassword(userCredential.user, formData.sewPassword)
      toast.success('La contraseña fue cambiada correctamente')
      setIsLoading(false)
    } catch (err) {
      toast.error('Error al cambiar la contraseña')
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setAuthUser(null)
    } catch (err) {
      toast.error('Error en el servidor! intente mas tarde')
    }
  }

  return {
    authUser,
    startWithGoogle,
    loginWhitEmailAndPassword,
    registerWithEmailAndPassword,
    updateName,
    updateEmailUser,
    updatePasswordUser,
    logout,
  }
}
