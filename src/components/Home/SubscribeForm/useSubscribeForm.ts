import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { subscribeEmail } from '@/utils/subscribeEmail'
import { toast } from 'react-toastify'

export function useSubscribeForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('El correo no es valido')
        .required('El correo es obligatorio'),
    }),

    onSubmit: (formData) => {
      if (!checked) {
        toast.warning('Debes aceptar nuestras políticas de privacidad')
        return
      }

      const { email } = formData

      setIsLoading(true)
      subscribeEmail(email)
        .then(() => {
          toast.success('Gracias por suscribirte')
        })
        .catch(() => {
          toast.error('Error en el servidor. Intenta nuevamente')
        })
        .finally(() => setIsLoading(false))
    },
  })

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return {
    isLoading,
    formik,
    handleCheckBox,
  }
}
