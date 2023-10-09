import ClipLoader from 'react-spinners/ClipLoader'
import {
  FaUser,
  FaEye,
  FaEyeSlash,
  FaAddressCard,
  FaLock,
  FaGoogle,
} from 'react-icons/fa'

import { useRegisterForm } from './useRegisterForm'
import styles from '../../formStyles.module.css'

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RegisterForm({ setOpenModal, setShowLogin }: Props) {
  const { formik, isLoading, showPassword, loginWithGoogle, setShowPassword } =
    useRegisterForm(setOpenModal)

  return (
    <div className={styles.content}>
      <div className={styles.title}>Registrate</div>
      <button className='buttonGoogle' onClick={loginWithGoogle}>
        <ClipLoader color='#fff' loading={isLoading} size={20} />
        Inicia con Google <FaGoogle />
      </button>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputBox}>
          <FaUser className={styles.formIcon} />
          <input
            className={styles.input}
            name='name'
            type='text'
            placeholder='Nombre'
            autoFocus
            onChange={formik.handleChange}
            style={
              formik.errors?.name
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
          />
        </div>
        <div className={styles.inputBox}>
          <FaUser className={styles.formIcon} />
          <input
            className={styles.input}
            name='lastname'
            type='text'
            placeholder='Apellido'
            onChange={formik.handleChange}
            style={
              formik.errors?.lastname
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
          />
        </div>
        <div className={styles.inputBox}>
          <FaAddressCard className={styles.formIcon} />
          <input
            className={styles.input}
            name='email'
            type='text'
            placeholder='Correo electrónico'
            onChange={formik.handleChange}
            style={
              formik.errors?.email
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
          />
        </div>
        <div className={styles.inputBox}>
          <FaLock className={styles.formIcon} />
          <input
            className={styles.input}
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Contraseña'
            autoComplete='current-password'
            onChange={formik.handleChange}
            style={
              formik.errors?.email
                ? { borderBottom: '1px solid red' }
                : { borderTop: 'transparent' }
            }
          />
          {showPassword ? (
            <FaEye
              className={styles.formIconEye}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaEyeSlash
              className={styles.formIconEye}
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <span className={styles.error}>{formik.errors?.password}</span>
        <button type='submit' className='button'>
          <ClipLoader color='#fff' loading={isLoading} size={20} />
          Registrarte
        </button>
      </form>
      <p className={styles.changeForm}>
        ¿Ya tienes una cuenta?{' '}
        <span onClick={() => setShowLogin(true)}>Inicia sesión</span>
      </p>
    </div>
  )
}
