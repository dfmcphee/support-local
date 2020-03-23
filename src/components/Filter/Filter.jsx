import React from 'react';

import styles from './Filter.module.css';

export function Filter({options}) {
  const optionsMarkup = options.map((option) => {
    return <option className={styles.Option} value={option.value}>{option.label}</option>
  });
  
  return (
    <select className={styles.Filter}>{optionsMarkup}</select>
  );
}

