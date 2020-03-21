import React from 'react';
import classNames from 'classnames';

import styles from './Container.module.css';

export function Container({children, compact}) {
  const containerClass = classNames(styles.Container, {[styles.compact]: compact});

  return (
    <div className={containerClass}>{children}</div>
  );
}

