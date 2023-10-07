import { useState } from 'react';
import { LoginFormState } from './model/types.ts';
import { EbInput } from '../../shared/ui/eb-input';
import { EbButton } from '../../shared/ui/eb-button';

import classes from './ui.module.scss';
import { useForm } from 'react-hook-form';

export function LoginForm () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginFormState>();
  
  const [loginData, setLoginData] = useState<LoginFormState>({
    login: '',
    password: '',
  });
  const onLoginInput = (login: string) => {
    setLoginData((prevState) => {
      return { ...prevState, login: login };
    });
  };
  const onPasswordInput = (password: string) => {
    setLoginData((prevState) => {
      return { ...prevState, password: password };
    });
  };
  const onSubmit = (loginForm: LoginFormState) => {
    console.log (loginForm);
    reset();
  };

  return <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
    <EbInput
      value={loginData.login}
      register={register}
      name='login'
      error={errors && errors.login?.type === 'required' ? (errors.login?.message as string) : null}
      validationSchema={{
        required: 'Это поле обязательно для заполнения!',
      }}
      onInput={onLoginInput}
      placeholder={'Логин'}
    />
    <EbInput
      value={loginData.password}
      register={register}
      name='password'
      error={errors && errors.password?.type === 'required' ? (errors.password?.message as string) : null}
      validationSchema={{
        required: 'Это поле обязательно для заполнения!',
      }}
      onInput={onPasswordInput}
      type={'password'}
      placeholder={'Пароль'}
      hintText={'Просто показать, что есть рабочие хинты (тултипы) ((всплывашки))'}
    />
    <EbButton variant={'secondary'} type={'submit'}>Войти</EbButton>
  </form>;
}