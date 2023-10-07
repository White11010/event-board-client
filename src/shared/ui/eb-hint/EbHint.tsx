import { ReactNode } from 'react';

import classes from './EbHint.module.scss';

type EbHintProps = {
  children: ReactNode,

}

export function EbHint({ children }: EbHintProps) {
  return <div className={classes.ebHint}>
    <div className={classes.ebHint__icon}>?</div>
    <div className={classes.ebHint__content}>
      {children}
    </div>
  </div>;
}