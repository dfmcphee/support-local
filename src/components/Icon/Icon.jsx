import React from 'react';
import classNames from 'classnames';


import Facebook from './icons/facebook.inline.svg';
import Bandcamp from './icons/bandcamp.inline.svg';
import Twitter from './icons/twitter.inline.svg';
import Instagram from './icons/instagram.inline.svg';
import YouTube from './icons/youtube.inline.svg';
import Play from './icons/play.inline.svg';

import styles from './Icon.module.css';

const AVAILABLE_ICONS = {
  facebook: Facebook,
  bandcamp: Bandcamp,
  twitter: Twitter,
  instagram: Instagram,
  youtube: YouTube,
  play: Play,
};

export function Icon({name, large}) {
  const IconSVG = AVAILABLE_ICONS[name];
  const iconClass = classNames(styles.Icon, {[styles.large]: large});
  
  
  return <div className={iconClass}><IconSVG /></div>;
}
