import SushiGuay from '@/public/logo-sushi.svg'
import GuyWok from '@/public/logo-guaywok.svg'
import SaborCasita from '@/public/logo-sabor.svg'
import Hamburguesería from '@/public/logo-hamburgueseria.svg'
import Burrito from '@/public/logo-burrito.png'
import Poke from '@/public/logo-pokes.svg'

interface RestaurantType {
  href: string
  imgSrc: any
  imgAlt: string
  title: string
  description: string
  slogan: string
}

export const RestaurantsConst: RestaurantType[] = [
  {
    href: '/sushiguay',
    imgSrc: SushiGuay,
    imgAlt: 'Logo SushiGuay',
    title: 'SushiGuay',
    description:
      'SushiGuay un restaurante japonés en Málaga. Ofrecemos gran variedad de sushi, como los Maki, Sushiroll, Rolls Tempura, Rolls Semi Tempura y varios combos, puedes ver nuestro menú por apartados dando click en cada sección para verlos en detalle.',
    slogan: 'SushiGuay tu sushi en Málaga.',
  },
  {
    href: '/guaywok',
    imgSrc: GuyWok,
    imgAlt: 'Logo GuyWok',
    title: 'GuyWok',
    description:
      'GuyWok un restaurante de comida china en Málaga. Ofrecemos un menú variado de comida cantonesa, como el típico arroz chino, lumpia, chop suey, pollo agridulce, upon noodles y noodles con o sin picante como también platos combinados, puedes ver nuestro menú por apartados dando click en cada sección para verlos en detalle.',
    slogan: 'GuayWok tu comida china en Málaga.',
  },
  {
    href: '/sabor-casita',
    imgSrc: SaborCasita,
    imgAlt: 'Logo Con sabor a Casita',
    title: 'Con sabor a Casita',
    description:
      'Con sabor a casita, comida casera venezolana en Málaga. Si buscas ese rico sabor de la comida casera como las empanadas venezolanas, arepas venezolanas, el famoso pabellón criollo, cachapas y otros platos con ese toque de hecho en casa, estás en el lugar indicado. Puedes ver nuestro menú por apartados dando click en cada sección para verlos en detalle.',
    slogan: 'Restaurante venezolano en Málaga.',
  },
  {
    href: '/hamburgueseria-venezuela',
    imgSrc: Hamburguesería,
    imgAlt: 'Logo Hamburguesería Venezuela',
    title: 'Hamburguesería Venezuela',
    description:
      'Hamburguesería VZLA, comida americana con sabor a Venezuela en Málaga. Si buscas ese rico sabor de las hamburguesas venezolanas, perros calientes y camperos, estás en el lugar indicado. Puedes ver nuestro menú por apartados dando click en cada sección para verlos en detalle.',
    slogan: 'Hamburguesas en Málaga con sabor a Venezuela.',
  },
  {
    href: '/pokes-guay',
    imgSrc: Poke,
    imgAlt: 'Logo Pokes Guay',
    title: 'Pokes Guay',
    description:
      'Pokes Guay, comida hawaiana con sabor a Venezuela en Málaga. En este restaurante te ofrecemos Pokes Bowls fríos y calientes, con la posibilidad de que tú mismo lo puedas armar a tu gusto. Puedes ver nuestro menú por apartados dando click en cada sección para verlos en detalle.',
    slogan: 'Pokes hawaianos en Málaga con sabor a Venezuela.',
  },
  {
    href: '/don-burrito',
    imgSrc: Burrito,
    imgAlt: 'Logo Don Burrito',
    title: 'Don Burrito',
    description:
      'Don Burrito es un restaurante Mexicano en Málaga. Ofrecemos platos típicos de México, como variedad de burritos mexicanos, y bolls con el típico sabor de la cocina mexicana, puedes ver nuestro menú por apartados dando click en cada sección para verlos en detalle.',
    slogan: 'Comida mexicana en Málaga con sabor a Venezuela.',
  },
]
