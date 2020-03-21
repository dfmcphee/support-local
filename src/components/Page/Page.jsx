import React from 'react';

import styles from './Page.module.css';

export function Page({children}) {
  return (
    <div className={styles.Page}>
        <div className={styles.Content}>
            {children}
        </div>
    </div>
  );
}
