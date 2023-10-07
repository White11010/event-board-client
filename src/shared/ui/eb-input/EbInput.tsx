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

  //react-hook-forms
  name: string,
  register: any,
  error?: string | null,
  validationSchema?: any,
  onInput: (value: string) => void
}

export function EbInput({
  value,
  onInput,
  type = 'text',
  placeholder = '',
  hintText = null,
  name,
  register,
  validationSchema,
  error = null
}: EbInputProps) {
  const slotProps = {
    root: {
      className: cn(classes.ebInput__inputContainer)
    },
    input: {
      className: cn(classes.ebInput__input)
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
  const onPasswordEyeIconClick = () => {
    setIsVisible((prevState: boolean) => !prevState);
  };
  const onPasswordEyeIconMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return <div className={cn(classes.ebInput)}>
    <Input
      slotProps={slotProps}
      value={value}
      name={name}
      type={currentInputType}
      placeholder={placeholder}
      {...register(name, validationSchema)}
      onInput={(e) => onInput((e.target as HTMLInputElement).value)}
      endAdornment={
        <>
          {
            type === 'password' && <div
              className={classes.ebInput__passwordIcon}
              onClick={onPasswordEyeIconClick}
              onMouseDown={onPasswordEyeIconMouseDown}
            >
              {isVisible ? <VisibilityOff style={{ color: '#999999' }}/> : <Visibility style={{ color: '#999999' }}/>}
            </div>
          }
          {
            hintText && <div className={classes.ebInput__hintIcon}>
              <EbHint>{ hintText }</EbHint>
            </div>
          }
        </>
      }
    />
    <div className={classes.ebInput__error}>
      { error && <p className={classes.ebInput__errorText}>{ error }</p> }
    </div>
  </div>;
}