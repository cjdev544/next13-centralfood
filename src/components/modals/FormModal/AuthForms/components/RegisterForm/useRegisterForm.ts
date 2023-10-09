import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useAuth } from '@/hooks/useAuth'

export function useRegisterForm(
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { startWithGoogle, registerWithEmailAndPassword } = useAuth()

  const loginWithGoogle = () => {
    setIsLoading(true)
    startWithGoogle(setOpenModal, setIsLoading)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      lastname: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string()
        .min(6)
        .required('La contraseña debe tener almenos 6 caracteres'),
    }),

    onSubmit: async (formData) => {
      const { email, password, name, lastname } = formData
      const displayName = `${name} ${lastname}`

      setIsLoading(true)

      registerWithEmailAndPassword(
        email,
        password,
        displayName,
        setOpenModal,
        setIsLoading
      )
    },
  })

  return {
    formik,
    isLoading,
    showPassword,
    loginWithGoogle,
    setShowPassword,
  }
}
