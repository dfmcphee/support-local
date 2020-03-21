import React from 'react';

import {Button} from '../Button';
import {Subheading} from '../Subheading';

import styles from './Business.module.css';

export function Business({name, description, cta, url}) {
  return (
    <div className={styles.Business}>
      <div className={styles.Content}>
        <Subheading>{name}</Subheading>
        <p>{description}</p>
      </div>
      <div className={styles.CTA}>
        <Button url={url}>{cta}</Button>
      </div>
    </div>
  );
}
