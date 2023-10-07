export interface UserDB {
  id: string
  uid: string
  username: string
  email: string
}

export interface User {
  uid: string
  displayName: string
  email: string
}

export interface AddressDB {
  id?: string
  details: string
  postalcode: string
  title: string
  user: string
  zone: Zone
}

interface Zone {
  address: string
  distNumber: string
  distance: string
  duration: string
  ok: boolean
}
