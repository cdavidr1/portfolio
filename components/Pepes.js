import React from 'react'
import styles from '@/styles/Pepes.module.css'

export default function Pepes() {
  return (<>
    <div className={`${styles.pepeContainerOne}`}>
      <span className={`${styles.pepeOne}`}>
        ...
      </span>
    </div>

    <div className={`${styles.pepeContainerTwo}`}>
        <span className={`${styles.pepeTwo}`}>
          ...
        </span>
    </div>

    <div className={`${styles.pepeContainerThree}`}>
        <span className={`${styles.pepeThree}`}>
          Fullstack Developer
        </span>
    </div>
</>
  )
}
