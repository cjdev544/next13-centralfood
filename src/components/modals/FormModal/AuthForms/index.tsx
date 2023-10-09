import { useState } from 'react'

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AuthForms({ setOpenModal }: Props) {
  const [showLogin, setShowLogin] = useState(false)

  return showLogin ? (
    <LoginForm setOpenModal={setOpenModal} setShowLogin={setShowLogin} />
  ) : (
    <RegisterForm setOpenModal={setOpenModal} setShowLogin={setShowLogin} />
  )
}
