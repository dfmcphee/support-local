import React from 'react';

import styles from './Subheading.module.css';

export function Subheading({children}) {
  return <h2 className={styles.Subheading}>{children}</h2>
}

