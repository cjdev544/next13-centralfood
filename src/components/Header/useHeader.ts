import { useEffect, useState } from 'react'
import useOnclickOutside from 'react-cool-onclickoutside'

import { useAuth } from '@/hooks/useAuth'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export function useHeader() {
  const { authUser, logout } = useAuth()
  const { cartProducts } = useLocalStorage()
  const [openModal, setOpenModal] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [initialsName, setInitialsName] = useState('Pf')

  useEffect(() => {
    if (authUser && !authUser?.photoURL) {
      let initialsNames
      if (authUser?.displayName) {
        const separateName = authUser.displayName.split(' ')
        initialsNames =
          (separateName[0].at(0) as string) + separateName[1].at(0)
        setInitialsName(initialsNames?.toUpperCase() as string)
      }
    }
  }, [authUser])

  const ref = useOnclickOutside(() => {
    setShowOptions(false)
  })

  return {
    authUser,
    cartProducts,
    initialsName,
    openModal,
    showOptions,
    logout,
    ref,
    setOpenModal,
    setShowOptions,
  }
}
