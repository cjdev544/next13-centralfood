'use client'

import Link from 'next/link'
import ClipLoader from 'react-spinners/ClipLoader'

import { useSubscribeForm } from './useSubscribeForm'
import style from './SubscribeForm.module.css'

export default function SubscribeForm() {
  const { isLoading, formik, handleCheckBox } = useSubscribeForm()

  return (
    <section className={style.subscribe}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <span className={style.header}>
          <p>Suscribete a CentralFood Málaga</p>
          <span>
            Recibe cupones de descuento en tu correo y mantente informado de
            nuestras novedades.
          </span>
        </span>
        <input
          className={style.input}
          type='email'
          name='email'
          placeholder='Correo electrónico'
          onChange={formik.handleChange}
        />
        <label className={style.checkBox}>
          <input
            type='checkbox'
            id='cbox1'
            value='first_checkbox'
            onChange={handleCheckBox}
          />{' '}
          He leído y acepto los{' '}
          <Link href='/terminos-condiciones' prefetch={false}>
            Términos y condiciones
          </Link>
        </label>
        <button type='submit' className='button' disabled={isLoading}>
          <ClipLoader color='#000' loading={isLoading} size={20} />
          <span className={style.spanButton}>Suscribirme</span>
        </button>
      </form>
    </section>
  )
}
