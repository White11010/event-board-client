import {useState} from "react";
import {LoginFormState} from "./model/types.ts";
import {EbInput} from "../../shared/ui/eb-input";
import {EbButton} from "../../shared/ui/eb-button";

import classes from './ui.module.scss'

export function LoginForm () {
  const [loginData, setLoginData] = useState<LoginFormState>({
    login: '',
    password: '',
  })
  const onLoginInput = (login: string) => {
    setLoginData((prevState) => {
      return {...prevState, login: login}
    })
  }
  const onPasswordInput = (password: string) => {
    setLoginData((prevState) => {
      return {...prevState, password: password}
    })
  }
  const onSubmitButtonClick = () => {

  }

  return <form className={classes.loginForm}>
    <EbInput value={loginData.login} onInput={onLoginInput} placeholder={'Логин'} />
    <EbInput value={loginData.password} onInput={onPasswordInput} type={"password"} placeholder={'Пароль'} hintText={'Просто показать, что есть рабочие хинты (тултипы) ((всплывашки))'}/>
    <div>

    </div>
    <EbButton variant={"secondary"} type={"submit"} onClick={onSubmitButtonClick}>Войти</EbButton>
  </form>
}