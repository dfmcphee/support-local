import React from 'react';

import styles from './Heading.module.css';

export function Heading({children}) {
  return <h1 className={styles.Heading}>{children}</h1>
}

