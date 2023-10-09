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

/**
 * Orders
 */

export interface Order {
  id: string
  cubiertosParaPersonas: number
  cancelCounter: boolean
  deliveryIn: string
  sinDescuento: number
  name: string
  notas: string
  descuento: Descuento
  facture: string
  pedido: Pedido[]
  idPago?: string
  totalCompra: number
  orderSend: boolean
  phone: string
  createdAt: number
  costoEnvio: any
  horaEntrega: string
  usuario: string
  totalProductos: number
  username: string
  direccionEnvio: any
  fechaEntrega: string
  cash?: string
}

export interface Descuento {
  nombre?: string
  type?: string
  use?: number
  cost?: string
}

export interface Pedido {
  precioUnitario: string
  id: string
  producto: string
  subTotal: number
  cantidadDelProducto: number
  url: string
  descripcion: string
  path: string
}

/******************** */
export interface AuthUser {
  uid: string
  displayName: string | null
  email: string
  photoURL?: string
  provider: string
}
export interface DataHome {
  id: ProductsSection
  description: string
  title: string
  productsSection: string[]
}

export enum ProductsSection {
  POPULAR_PRODUCTS = 'popularProducts',
  PROMOTION_PRODUCTS = 'promotionProducts',
}

export interface Product {
  id: string
  descripcion: string
  disponible: boolean
  precio: string
  nombre: string
  number?: number
  restaurante: string
  path: string
  categoria: string
  image: string
}

export interface Restaurant {
  id: string
  description: string
  image: string
  type?: string
  page: Restaurants
  subTitle?: string
  position: any
  isOpen: boolean
  name: string
  firstContent?: string[]
  categories: string[]
  secondContent?: string[]
}

export enum Restaurants {
  SUSHIGUAY = 'sushiguay',
  GUAYWOK = 'guaywok',
  SABOR_CASITA = 'sabor-casita',
  HAMBUR_VZLA = 'hamburgueseria-venezuela',
  POKES_GUAY = 'pokes-guay',
  DON_BURRITO = 'don-burrito',
  POSTRES_BEBIDAS = 'postres-bebidas',
}
