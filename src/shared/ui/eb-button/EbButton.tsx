import { Button } from '@mui/base';
import { MouseEventHandler, ReactNode } from 'react';
import cn from 'classnames';

import classes from './EbButton.module.scss';

type EbButtonProps = {
  children: ReactNode,
  variant?: 'primary' | 'secondary',
  type?: 'button' | 'submit',
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function EbButton({
  children,
  onClick = () => {},
  variant = 'primary',
  type = 'button'
}: EbButtonProps) {
  const slotProps = {
    root: {
      className: cn(
        classes.ebButton,
        variant === 'primary' && classes.ebButtonPrimary,
        variant === 'secondary' && classes.ebButtonSecondary
      )
    }
  };
  return <Button type={type} onClick={onClick} slotProps={slotProps}>
    {children}
  </Button>;
}
