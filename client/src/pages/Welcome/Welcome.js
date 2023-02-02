import React from 'react'
import styles from './Welcome.module.css'
import LoginContainer from '../../components/LoginContainer/LoginContainer'
export default function Welcome() {
  return (
    <div className={styles.container}>
        <LoginContainer/>
    </div>
  )
}
