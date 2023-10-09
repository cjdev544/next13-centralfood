import { FaRegWindowClose } from 'react-icons/fa'

import style from './FormModal.module.css'

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  contentModal: React.ReactNode
}

export default function FormModal({ setOpenModal, contentModal }: Props) {
  return (
    <div className={style.modal}>
      <div className={style.box}>
        <FaRegWindowClose
          className={style.close}
          onClick={() => setOpenModal(false)}
        />
        {contentModal}
      </div>
    </div>
  )
}
