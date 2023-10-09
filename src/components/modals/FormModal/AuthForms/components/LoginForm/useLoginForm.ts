import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useAuth } from '@/hooks/useAuth'

export function useLoginForm(
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { startWithGoogle, loginWhitEmailAndPassword } = useAuth()

  const loginWithGoogle = () => {
    setIsLoading(true)
    startWithGoogle(setOpenModal, setIsLoading)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El correo no es valido')
        .required('El correo es requerido'),
      password: Yup.string().required('La contraseña es requerida'),
    }),

    onSubmit: async (formData) => {
      setIsLoading(true)
      const { email, password } = formData

      loginWhitEmailAndPassword(email, password, setOpenModal, setIsLoading)
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
