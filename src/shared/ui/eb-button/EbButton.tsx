import {Button} from "@mui/base";
import {MouseEventHandler, ReactNode} from "react";
import cn from "classnames"

import classes from './EbButton.module.scss'

type EbButtonProps = {
  children: ReactNode,
  type?: 'primary' | 'secondary',
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function EbButton({
                           children,
                           onClick,
                           type = 'primary',

                         }: EbButtonProps) {
  const slotProps = {
    root: {
      className: cn(
        classes.ebButton,
        type === 'primary' && classes.ebButtonPrimary,
        type === 'secondary' && classes.ebButtonSecondary
      )
    }
  }
  return <Button onClick={onClick} slotProps={slotProps}>
    {children}
  </Button>
}