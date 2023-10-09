'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { useElementInView } from '@/hooks/useElementInView'
// import Moto from '../../public/trineo.svg'
// import Moto from '../../public/moto-vale-cola.svg'
// import CentralFood from '../../public/logo-navidad.svg'
import Moto from '@/public/moto.svg'
import styles from '../Hero.module.css'

export function AnimateIcon() {
  const [addClassMove, setAddClassMove] = useState<boolean | null>(null)

  const boxRef: React.RefObject<HTMLHeadingElement> =
    useRef<HTMLHeadingElement>(null)
  const { isIntersecting } = useElementInView(boxRef)

  useEffect(() => {
    setAddClassMove(isIntersecting)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting])

  return (
    <>
      <h2 ref={boxRef}>Comida a domicilio en Málaga</h2>
      <div className={addClassMove ? styles.motoIcon : ''}>
        <Image src={Moto} alt='delivery image' width={45} height={45} />
        {/* <Image src={Moto} alt='delivery image' width={110} height={110} /> */}
        {/* <Image src={Moto} alt='delivery image' width={140} height={110} /> */}
      </div>
    </>
  )
}
