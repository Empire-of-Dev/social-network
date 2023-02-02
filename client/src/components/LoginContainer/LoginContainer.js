import React from 'react'
import styles from './LoginContainer.module.css'

export default function LoginContainer() {
  return (
    <div  className={styles.container}>
        <div className={styles.logo_container}>
            <div className={styles.logo}>
                <img className={styles.logo_name} src='/logo.svg' alt='bg_logo'/>
                <img className={styles.logo_bg}src='/bgLogo.svg' alt='bg_logo'/>
                
                
            </div>
            <div className={styles.title}>
               Square    
            </div>
         </div>
    </div>
  )
}
