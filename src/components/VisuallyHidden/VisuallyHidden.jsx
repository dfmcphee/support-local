import React from 'react'

import styles from './VisuallyHidden.module.css';

export function VisuallyHidden({children}){
  return <span className={styles.VisuallyHidden}>{children}</span>
}

