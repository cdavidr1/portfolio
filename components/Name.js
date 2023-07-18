import React from 'react'
import styles from '@/styles/Name.module.css'

export default function Name() {
  return (
    <div className={`${styles.nameContainer}`}>
      <span className={`${styles.name}`}>David</span>
    </div>
  )
}
