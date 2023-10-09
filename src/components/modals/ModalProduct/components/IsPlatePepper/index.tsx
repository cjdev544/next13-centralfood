import { FaCheck } from 'react-icons/fa'
import style from './exclusivePlate.module.css'

interface Props {
  selectPepper: boolean
  setSelectPepper: React.Dispatch<React.SetStateAction<boolean>>
}

export default function IsPlatePepper({
  selectPepper,
  setSelectPepper,
}: Props) {
  return (
    <div className={style.exclusive}>
      <div
        style={
          !selectPepper
            ? { fontWeight: 'bold' }
            : {
                backgroundColor: 'transparent',
                border: '2px solid #000',
                color: '#000',
              }
        }
        className={style.select}
        onClick={() => setSelectPepper(false)}
      >
        <span>Sin picante</span>
        {!selectPepper && <FaCheck />}
      </div>
      <div
        style={
          selectPepper
            ? { fontWeight: 'bold' }
            : {
                backgroundColor: 'transparent',
                border: '2px solid #000',
                color: '#000',
              }
        }
        className={style.select}
        onClick={() => setSelectPepper(true)}
      >
        <span>Con picante</span>
        {selectPepper && <FaCheck />}
      </div>
    </div>
  )
}
