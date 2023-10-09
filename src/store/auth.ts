import { create } from 'zustand'

import { type AuthUser } from '@/types.d'
import { devtools } from 'zustand/middleware'
import { User } from 'firebase/auth'

interface State {
  auth: AuthUser | User | null
  setAuth: (user: AuthUser | User | null) => void
}

export const useUserState = create<State>()(
  devtools((set) => ({
    auth: null,

    setAuth: (user) => {
      set(() => ({ auth: user }))
    },
  }))
)
