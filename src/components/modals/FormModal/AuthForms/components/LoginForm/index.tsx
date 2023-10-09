import ClipLoader from 'react-spinners/ClipLoader'
import {
  FaEye,
  FaEyeSlash,
  FaAddressCard,
  FaLock,
  FaGoogle,
} from 'react-icons/fa'

import { useLoginForm } from './useLoginForm'
import styles from '../../formStyles.module.css'

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoginForm({ setOpenModal, setShowLogin }: Props) {
  const { formik, isLoading, showPassword, loginWithGoogle, setShowPassword } =
    useLoginForm(setOpenModal)

  return (
    <div className={styles.content}>
      <div className={styles.title}>Iniciar sesión</div>
      <button className='buttonGoogle' onClick={loginWithGoogle}>
        <ClipLoader color='#fff' loading={isLoading} size={20} />
        Inicia con Google <FaGoogle />
      </button>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.inputBox}>
          <FaAddressCard className={styles.formIcon} />
          <input
            className={styles.input}
            name='email'
            type='text'
            placeholder='Correo electrónico'
            autoFocus
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
              formik.errors?.password
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
        <div className={styles.remember}>
          <span>¿Has olvidado la contraseña?</span>
        </div>
        <button type='submit' className='button'>
          <ClipLoader color='#fff' loading={isLoading} size={20} />
          Iniciar sesión
        </button>
      </form>
      <p className={styles.changeForm}>
        ¿No tienes una cuenta?{' '}
        <span onClick={() => setShowLogin(false)}>Registrate</span>
      </p>
    </div>
  )
}
