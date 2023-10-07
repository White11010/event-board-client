import { Input } from '@mui/base';
import cn from 'classnames';

import classes from './EbInput.module.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState, MouseEvent, useMemo } from 'react';
import { EbHint } from '../eb-hint';

type EbInputProps = {
  value: string,
  placeholder?: string,
  type?: 'text' | 'password',
  hintText?: string | null,
  onInput: (value: string) => void
}

export function EbInput({
  value,
  onInput,
  type = 'text',
  placeholder = '',
  hintText = null,
}: EbInputProps) {
  const slotProps = {
    root: {
      className: cn(classes.container)
    },
    input: {
      className: cn(classes.ebInput)
    }
  };

  // Password
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const currentInputType = useMemo<typeof type>(() => {
    if (type !== 'password') {
      return type;
    }
    return isVisible ? 'text' : 'password';
  }, [type, isVisible]);
  const onClick = () => {
    setIsVisible((prevState: boolean) => !prevState);
  };
  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return <Input
    slotProps={slotProps}
    value={value}
    type={currentInputType}
    placeholder={placeholder}
    onInput={(e) => onInput((e.target as HTMLInputElement).value)}
    endAdornment={
      <>
        {
          type === 'password' && <div
            className={classes.icon}
            onClick={onClick}
            onMouseDown={onMouseDown}
          >
            {isVisible ? <VisibilityOff style={{ color: '#999999' }}/> : <Visibility style={{ color: '#999999' }}/>}
          </div>
        }
        {
          hintText && <div className={classes.hintIcon}>
            <EbHint>{ hintText }</EbHint>
          </div>
        }
      </>
    }
  />;
}