import React from 'react';

import styles from './Button.module.css';

export function Button({url, children}) {
  return <a className={styles.Button} href={url}>{children}</a>;
}

